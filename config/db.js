import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost', 
  user:'root',
  password:'root',
  database:'enboost',
  port: 3300
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conexão com o banco de dados estabelecida!");
});

export default db;
