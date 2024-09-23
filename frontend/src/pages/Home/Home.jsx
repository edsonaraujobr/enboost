import "./Home.css";
import { Header } from "../../components/Header";
import image from "../../assets/image.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3030/user/getAllUsers");
            setUsers(response.data); 
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="body">
            <Header />
            <main className="main">
                <div className="main-div">
                    <h2 className="title">Enboost</h2>
                    <p>O site <strong>friend</strong> para o seu aprendizado de inglês</p>
                </div>
                <img src={image} alt="Pesquise" className="image" />
            </main>
            { users.length > 0 ? (
            <footer className="footer">
                <h3>Usuários que já usaram o Enboost:</h3>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.full_name}</li>
                    ))}
                </ul>
            </footer>
            ) : <></>}

        </div>
    );
}
