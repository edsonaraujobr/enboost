import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3300,
    password: "root",
    database: "enboost"
});

db.connect((err) => {
    if (err) {
      console.error("Erro ao conectar ao banco de dados:", err);
      return;
    }
    console.log("Conexão com o banco de dados estabelecida!");
  });
  
  export default db;