import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import "./TranslateWord.css";
import axios from "axios";

export function TranslateWord() {
  const [translationDirection, setTranslationDirection] = useState("pt-en");
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [translatedWords, setTranslatedWords] = useState([]);

  const handleTranslate = async () => {
    try {
      let response;
      if (translationDirection === "pt-en" && word.length > 0) {
        response = await axios.post("http://localhost:3030/translation/PT-EN", {
          wordPortuguese: word,
        });
      } else if (translationDirection === "en-pt" && word.length > 0) {
        response = await axios.post("http://localhost:3030/translation/EN-PT", {
          wordEnglish: word,
        });
      }

      if (response && response.data.palavra) {
        setTranslation(response.data.palavra);
      }
    } catch (error) {
      alert("Erro: " + error);
    }
  };

  const fetchTranslatedWords = async () => {
    try {
      const response = await axios.get("http://localhost:3030/word/getTranslated");
      setTranslatedWords(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar palavras traduzidas:", error);
    }
  };

  useEffect(() => {
    fetchTranslatedWords();
  }, []);

  return (
    <main className="body">
      <Header />
      <section className="main-section">
        <div className="section-div">
          <h2>Precisando de uma ajudinha?</h2>
          <span>
            <strong>Traduza palavras</strong> que você não sabe
          </span>
        </div>
        <div className="main-input-save-word">
          <select
            value={translationDirection}
            onChange={(e) => setTranslationDirection(e.target.value)}
            className="translation-select"
          >
            <option value="pt-en">Português para Inglês</option>
            <option value="en-pt">Inglês para Português</option>
          </select>

          <input
            type="text"
            placeholder="Traduza qualquer palavra..."
            className="main-input"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <button
            type="button"
            className="main-save-button"
            onClick={handleTranslate}
          >
            Traduzir
          </button>
        </div>

        {translation && (
          <div className="translation-result">
            <h3>Tradução:</h3>
            <p>{translation}</p>
          </div>
        )}

        { translatedWords > 0 ? (
          <div className="translated-words">
            <h3>Palavras Traduzidas Anteriormente:</h3>
            <ul>
              {translatedWords.map((item) => (
                <li key={item.id}>
                  {item.wordEnglish} - {item.wordPortuguese}
                </li>
              ))}
            </ul>
          </div>
        ) : <></>}

      </section>
    </main>
  );
}
