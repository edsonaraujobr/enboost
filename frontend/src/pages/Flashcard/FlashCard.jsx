import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import axios from "axios";
import "./FlashCard.css"

export function FlashCard() {
    const [wordEnglish, setWordEnglish] = useState("");
    const [wordPortuguese, setWordPortuguese] = useState("");
    const [translation, setTranslation] = useState("");
    const [savedWords, setSavedWords] = useState([]); 

    useEffect(() => {
        const fetchSavedWords = async () => {
            try {
                const response = await axios.get("http://localhost:3030/word/getRemember");
                setSavedWords(response.data.results); 
                console.log("savedWords", response.data.results)
            } catch (error) {
                console.error("Erro ao buscar palavras salvas:", error);
            }
        };

        fetchSavedWords();
    }, []);

    const handleTranslate = async () => {
        try {
            let response;
            console.log(wordEnglish, wordPortuguese)
            if (wordEnglish.length > 0 && wordPortuguese.length > 0) {
                response = await axios.post("http://localhost:3030/word/saveRemember", {
                    wordPortuguese: wordPortuguese,
                    wordEnglish: wordEnglish,
                });
            }

            if (response ) {
                setSavedWords(prevWords => [
                    ...prevWords,
                    { wordEnglish, wordPortuguese }
                ]);
                cleanInputs();
            } else {
                console.log("error")
            }
        } catch (error) {
            alert("Erro ao salvar palavra: " + error);
        }
    };

    const cleanInputs = () => {
        setWordEnglish("")
        setWordPortuguese("")
    }
    return (
        <>
            <main className="body">
                <Header />
                <section className="main-section">
                    <div className="section-div">
                        <h2>Aprender uma nova língua requer repetição</h2>
                        <span>Digite para <strong>salvar novas palavras</strong> em inglês</span>
                    </div>
                    <div className="main-input-save-word">
                        <input
                            type="text"
                            placeholder="Palavra em inglês..."
                            className="main-input"
                            value={wordEnglish}
                            onChange={(e) => setWordEnglish(e.target.value)} 
                        />
                        <input
                            type="text"
                            placeholder="Significado da palavra em português..."
                            className="main-input"
                            value={wordPortuguese}
                            onChange={(e) => setWordPortuguese(e.target.value)} 
                        />
                        <button
                            type="button"
                            className="main-save-button"
                            onClick={handleTranslate} 
                        >
                            Salvar
                        </button>
                    </div>

                    {translation && (
                        <div className="translation-result">
                            <h3>Tradução:</h3>
                            <p>{translation}</p>
                        </div>
                    )}
                </section>

                {savedWords.length > 0 ? (
                    <footer className="footer">
                        <h3>Palavras Salvas:</h3>
                        <ul>
                            {savedWords.map((word, index) => (
                                <li key={index}>
                                    {word.wordEnglish} - {word.wordPortuguese}
                                </li>
                            ))}
                        </ul>
                    </footer>
                ) : <></>}

            </main>
        </>
    );
}
