const mysql = require('mysql2')
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senhaforte400',
  database: 'stardew_vegetais'
})
 
connection.connect((err) => {
  if (err) {
    console.log('Erro ao conectar no banco:', err)
    return
  }
  console.log('Conectado no banco de dados!')
})
 
module.exports = connection