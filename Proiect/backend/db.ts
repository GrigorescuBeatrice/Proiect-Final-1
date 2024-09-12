// Importă modulul mysql2
const mysql = require('mysql2');

// Creează o conexiune la baza de date MySQL
const connection = mysql.createConnection({
  host: 'localhost',       // sau IP-ul serverului tău MySQL
  user: 'root',            // utilizatorul MySQL (de obicei root în dezvoltare)
  password: '',            // parola pentru MySQL
  database: 'my_shop'  // numele bazei de date în care ai tabela newsletter
});

// Conectează-te la baza de date
connection.connect((err) => {
  if (err) {
    console.error('Eroare la conectarea la baza de date: ' + err.stack);
    return;
  }
  console.log('Conectat la baza de date MySQL cu id-ul ' + connection.threadId);
});
