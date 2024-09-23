import { useState } from "react"
import { Header } from "../../components/Header"

export function TranslateWord () {
    const [translationDirection, setTranslationDirection] = useState("pt-en");
    const [word, setWord] = useState("");
  
    const handleTranslate = () => {
      // Lógica de tradução será adicionada aqui
      console.log(`Traduzindo "${word}" de ${translationDirection}`);
    };
   
    return (
            <main className="main" >
                <Header/>
                <div className="main-div">
                    <section className="main-section">
                        <div>
                            <h2 >Aprender uma nova lingua requer repetição</h2>
                            <span>Digite para <strong>salvar novas palavras</strong> em inglês</span>
                        </div>
                        <div className="main-input-save-word">
                            <input type="text" name="" id="" placeholder="Salve novas palavras..." className="main-input" />
                            <button type="button" className="main-save-button">Salvar</button>
                        </div>
                    </section>
                    <section className="main-section">
                        <div>
                            <h2>Precisando de uma ajudinha?</h2>
                            <span><strong>Traduza palavras</strong> que você não sabe</span>
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
                    </section>
                </div>
                <section>
                    
                </section>
            </main>
    )
}