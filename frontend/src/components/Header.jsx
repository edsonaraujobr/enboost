import "./Header.css"
import { useNavigate, useLocation } from "react-router-dom"

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <header className="header">
                <h2>Enboost</h2>
                <div className="header-buttons">
                    {location.pathname !== "/" && (
                        <button type="button" onClick={() => navigate("/")} className="header-button">Home</button>
                    )}
                    {location.pathname !== "/translate" && (
                        <button type="button" onClick={(e) => { navigate("/translate") }} className="header-button">Traduzir palavras</button>
                    )}
                    {location.pathname !== "/flashcard" && (
                        <button type="button" onClick={(e) => { navigate("/flashcard") }} className="header-button">Flashcards</button>
                    )}
                    
                </div>
            </header>
        </>
    )
}