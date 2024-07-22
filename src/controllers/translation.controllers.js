import { translate } from '@vitalets/google-translate-api';
import db from "../../config/db.js"

export const translateWordEnglishToPortuguese = (req,res) => {
    const { wordEnglish } = req.body;
    const { id } = req.params;

    if (!wordEnglish) 
        return res.status(400).send('Palavra não digitada');
    
    translate(wordEnglish, { from: 'en', to: 'pt' })
    .then(response => {
        const query = "INSERT INTO translated_words (wordEnglish, wordPortuguese, id_user) VALUES (?,?,?)"
        
        db.query(query, [wordEnglish, response.text, id], (err, result) => {
            if(err) {
                return res.status(500).json({ error: 'Erro ao inserir palavra no banco de dados', palavra: response.text  });
            }
            res.status(200).json({ palavra: response.text });
        })
    })
    .catch(err => {
        res.status(500).send('Erro ao traduzir palavra');
    });
}

export const translateWordPortugueseToEnglish = (req,res) => {
    const { wordPortuguese } = req.body;
    const { id } = req.params;

    if (!wordPortuguese) {
        return res.status(400).send('Palavra não digitada');
    }

    translate(wordPortuguese, { from: 'pt', to: 'en' })
    .then(response => {
        const query = "INSERT INTO translated_words (wordEnglish, wordPortuguese, id_user) VALUES (?,?,?)"
        
        db.query(query, [response.text, wordPortuguese, id], (err, result) => {
            if(err) {
                return res.status(500).json({ error: 'Erro ao inserir palavra no banco de dados', palavra: response.text  });
            }
            res.status(200).json({ palavra: response.text });
        })
    })
    .catch(err => {
        res.status(500).send('Erro ao traduzir palavra');
    });
}