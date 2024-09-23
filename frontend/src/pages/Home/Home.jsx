import "./Home.css"
import { Header } from "../../components/Header"
import image from "../../assets/image.jpg"

export function Home () {

    return (
        <div className="body">
            <Header/>
            <main className="main">
                <div className="main-div">
                    <h2 className="title">Enboost</h2>
                    <p>O site <strong>friend</strong> para o seu aprendizado de inglês</p>
                </div>
                <img src={image} alt="Pesquise" className="image"/>
            </main>
        </div>
    )
}