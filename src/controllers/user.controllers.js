import db from "../../config/db.js"
import bcrypt from "bcrypt";
const saltRounds = 10;

export const createUser = (req,res) => {
    const { full_name, email, password } = req.body;

    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], (err, data) =>{
        if (err) {
            console.error('Erro ao consultar banco de dados:', err);
            return res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }

        if (data.length === 0) {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if(hash) {
                    let queryInsert = "INSERT INTO users (full_name, email, password) VALUES (?,?,?)"

                    db.query(queryInsert, [full_name, email, hash], (err, data) => {
                        if(err) {
                            return res.status(500).json({ error: 'Erro ao inserir usuario no banco de dados' });
                        }
                        return res.status(201).json({message: 'Usuario cadastrado com sucesso'})
                    })
                } else {
                    return res.status(500).send("Erro ao criptografar senha");
                }
            })
            
        } else {
            return res.status(404).json({ error: 'Usuário ja cadastrado' });
        }
    });
}

export const getAllUsers = (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;

    const query = "SELECT id, full_name, email FROM users ORDER BY full_name ASC LIMIT ?,? ";
    const totalRowsQuery = "SELECT COUNT(*) AS total_rows FROM users";

    db.query(totalRowsQuery, (err, totalRowsData) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao buscar total de usuarios" });
        }
    
        const totalRows = totalRowsData[0].total_rows;

        db.query(query, [startIndex, limit], (err, data) => {
            if(err) {
                return res.status(500).json({error: "Erro ao buscar usuarios"});
            }
    
            if(data.length > 0) {
                const totalPages = Math.ceil(totalRows / limit)
    
                return res.status(200).json({
                    totalPages,
                    currentPage: page,
                    results: data,
                    next: page < totalPages ? page + 1 : null,
                    previous: page > 1 ? page - 1 : null
                });
            }
        })
    })
}