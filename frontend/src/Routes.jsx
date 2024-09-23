import {Routes, Route} from "react-router-dom"
import { TranslateWord } from "./pages/TranslateWord/TranslateWord.jsx"
import { FlashCard } from "./pages/Flashcard/FlashCard.jsx"
import { Home } from "./pages/Home/Home.jsx"

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/translate" element={<TranslateWord/>}/>
            <Route path="/flashcard" element={<FlashCard/>}/>
        </Routes>
    )
}