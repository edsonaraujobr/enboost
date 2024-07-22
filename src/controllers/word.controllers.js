import db from "../../config/db.js";

export const saveNewWordEnglish = async (req, res) => {
    const { wordEnglish, wordPortuguese } = req.body;
    const { id } = req.params;

    if(!wordEnglish || !wordPortuguese)
        return res.status(400).send('Palavra não digitada');

    const query = "INSERT INTO remember_words (wordEnglish, wordPortuguese, id_user) VALUES (?,?,?)";

    db.query(query, [wordEnglish, wordPortuguese, id], (err, data) =>{
        if (err) 
            return res.status(500).json({ error: 'Erro ao salvar palavra no banco de dados' });
        return res.status(201).json({message: 'Palavra salva com sucesso'})
    });

};

export const getAllWordsToRemember = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const { id } = req.params

    const query = "SELECT id, wordEnglish, wordPortuguese, date FROM remember_words WHERE id_user = ? ORDER BY date ASC LIMIT ?,? ";
    const totalRowsQuery = "SELECT COUNT(*) AS total_rows FROM users";

    db.query(totalRowsQuery, (err, totalRowsData) => {
        if (err) 
            return res.status(500).json({ error: "Erro ao buscar total de palavras traduzidas" });
    
        const totalRows = totalRowsData[0].total_rows;

        db.query(query, [id, startIndex, limit], (err, data) => {
            if(err) 
                return res.status(500).json({error: "Erro ao buscar palavras traduzidas"});
    
            if(data.length >= 0) {
                const totalPages = Math.ceil(totalRows / limit);
    
                return res.status(200).json({
                    totalPages,
                    currentPage: page,
                    results: data,
                    next: page < totalPages ? page + 1 : null,
                    previous: page > 1 ? page - 1 : null
                });
            };
        });
    });
};

export const getAllWordsTranslated = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const { id } = req.params

    const query = "SELECT id, wordEnglish, wordPortuguese, date FROM translated_words WHERE id_user = ? ORDER BY date ASC LIMIT ?,? ";
    const totalRowsQuery = "SELECT COUNT(*) AS total_rows FROM users";

    db.query(totalRowsQuery, (err, totalRowsData) => {
        if (err) 
            return res.status(500).json({ error: "Erro ao buscar total de palavras traduzidas" });
    
        const totalRows = totalRowsData[0].total_rows;

        db.query(query, [id,startIndex, limit], (err, data) => {
            if(err) 
                return res.status(500).json({error: "Erro ao buscar palavras traduzidas"});
            
            if(data.length > 0) {
                const totalPages = Math.ceil(totalRows / limit);
    
                return res.status(200).json({
                    totalPages,
                    currentPage: page,
                    results: data,
                    next: page < totalPages ? page + 1 : null,
                    previous: page > 1 ? page - 1 : null
                });
            };
        });
    });
};