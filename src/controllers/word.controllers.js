import Word from '../models/word.models.js';
import { verifyWordEnglish } from './translation.controllers.js';

export let listWordsToRemember = [];
export let listWordsTranslated = [];

export const saveNewWordEnglish = async (req, res) => {
    const { wordEnglish, wordPortuguese } = req.body;

    if(wordEnglish && wordPortuguese && ( wordEnglish.length > 0 && wordPortuguese.length > 0 )) {

        try {
            const result = await verifyWordEnglish(wordEnglish.toUpperCase(), wordPortuguese.toUpperCase())
            console.log(result);
            if(result) {
                const newWord = new Word(wordEnglish, wordPortuguese);
                listWordsToRemember.push(newWord);
                res.status(201).send('Created with sucess');
            } else {
                return res.status(400).send('Invalid word or translation');
            }
        } catch(err) {
            return res.status(500).send("Erro verifying word");
        }
    } else {
        res.status(400).send('Invalid word or translation');
    }

}

export const getAllWordsToRemember = (req, res) => {
    if(listWordsToRemember.length > 0)
        res.status(200).json(listWordsToRemember);
    else
        res.status(400).send( 'Error, array empty');
}

export const getAllWordsTranslated = (req, res) => {
    if(listWordsTranslated.length > 0)
        res.status(200).json(listWordsTranslated);
    else
        res.status(400).send( 'Error, array empty');
}