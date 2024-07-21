import { translate } from '@vitalets/google-translate-api';
import { listWordsTranslated } from './word.controllers.js';
import Word from '../models/word.models.js';

export const verifyWordEnglish = async(wordEnglish, wordPortuguese) => {

    try {
        const response = await translate(wordPortuguese, { from: 'pt', to: 'en' });
        console.log(wordEnglish, response.text);
        return wordEnglish.toUpperCase() === response.text.toUpperCase();
    } catch (err) {
        console.error(err);
        return false;
    }
}

export const translateWordEnglishToPortuguese = (req,res) => {
    const { wordBody } = req.body;
    if (!wordBody) {
        return res.status(400).send('wordBody is required');
    }

    translate(wordBody, { from: 'en', to: 'pt' })
    .then(response => {
        let newWord = new Word (wordBody, response.text);
        listWordsTranslated.push(newWord);

        res.status(200).json({ translatedWord: response.text });
    })
    .catch(err => {
        res.status(500).send('Error translating word');
    });
}

export const translateWordPortugueseToEnglish = (req,res) => {
    const { wordBody } = req.body;

    if (!wordBody) {
        return res.status(400).send('wordBody is required');
    }
    console.log("oi 1")
    translate(wordBody, { from: 'pt', to: 'en' })
    .then(response => {
        console.log("oi")
        const newWord = new Word(response.text, wordBody);
        listWordsTranslated.push(newWord);
        
        res.status(200).json({ translatedWord: response.text });
    })
    .catch(err => {
        res.status(500).send('Error translating word');
    });
}