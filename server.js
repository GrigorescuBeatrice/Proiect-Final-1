const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Inițializează aplicația Express
const app = express();
const port = 3002;

// Middleware pentru a prelucra datele din corpul solicitării
app.use(bodyParser.json());

// Creează o conexiune la baza de date MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Adaugă parola dacă ai una
  database: 'myshop'  // Schimbă cu numele bazei tale de date
});

// Conectează-te la baza de date
connection.connect((err) => {
  if (err) {
    console.error('Eroare la conectarea la baza de date: ' + err.stack);
    return;
  }
  console.log('Conectat la baza de date MySQL cu id-ul ' + connection.threadId);
});
app.get('/', (req, res) => {
  res.send("Salut");
});
// Ruta pentru a primi datele din formular și a le insera în baza de date
// app.post('/newsletter', (req, res) => {
//   const email = req.body.email;
// console.log(req);
//   // Inserăm emailul în tabela newsletter
//   // const query = 'INSERT INTO newsletter (email) VALUES (?)';
  
//   // connection.query(query, [email], (err, results) => {
//   //   if (err) {
//   //     console.error('Eroare la inserarea emailului: ' + err.stack);
//   //     return res.status(500).json({ message: 'A apărut o eroare la inserarea datelor!' });
//   //   }

//   //   console.log('Email inserat cu succes, ID-ul noului rând: ' + results.insertId);
   
//   // });
//   res.status(200).json({ message: 'Te-ai abonat cu succes!' });
// });
app.post('/newsletter', (req, res) => {
  console.log = req.body;

  // Save the data of user that was sent by the client

  // Send a response to client that will show that the request was successfull.
  res.send({
    message: 'New user was added to the list',
  });
});

// Pornim serverul pe portul specificat
app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
