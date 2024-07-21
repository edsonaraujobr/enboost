export default class Word{
    constructor(wordEnglish, wordPortuguese) {
        this.wordEnglish = wordEnglish;
        this.wordPortuguese = wordPortuguese;
    }

    getWordPortuguese() {
        return this.wordPortuguese;
    }

    getWordEnglish() {
        return this.wordEnglish;
    }
}