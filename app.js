// Importă modulul mysql2
const mysql = require('mysql2');

// Creează o conexiune la baza de date MySQL
const connection = mysql.createConnection({
  host: 'localhost',       // sau IP-ul serverului tău MySQL
  user: 'root',            // utilizatorul MySQL (modifică dacă e diferit)
  password: '',            // parola MySQL (modifică dacă este setată)
  database: 'myshop'  // înlocuiește cu numele bazei de date
});

// Conectează-te la baza de date
connection.connect((err) => {
  if (err) {
    console.error('Eroare la conectarea la baza de date: ' + err.stack);
    return;
  }
  console.log('Conectat la baza de date MySQL cu id-ul ' + connection.threadId);

  // 1. Inserare date în tabela 'newsletter'
  const email = 'exemplu@domeniu.com';
  const queryInsert = 'INSERT INTO newsletter (email) VALUES (?)';

  connection.query(queryInsert, [email], (err, results) => {
    if (err) {
      console.error('Eroare la inserarea datelor: ' + err.stack);
      return;
    }
    console.log('Email inserat cu succes, ID-ul noului rând: ' + results.insertId);

    // 2. Preluare date din tabela 'newsletter'
    const querySelect = 'SELECT * FROM newsletter';

    connection.query(querySelect, (err, results) => {
      if (err) {
        console.error('Eroare la preluarea datelor: ' + err.stack);
        return;
      }
      console.log('Date preluate:', results);

      // Închide conexiunea după ce toate operațiile sunt terminate
      connection.end((err) => {
        if (err) {
          console.error('Eroare la închiderea conexiunii: ' + err.stack);
          return;
        }
        console.log('Conexiunea la baza de date a fost închisă.');
      });
    });
  });
});
