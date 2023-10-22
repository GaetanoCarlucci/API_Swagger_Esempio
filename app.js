const express = require('express');
const app = express();
const port = 3000; // Porta in ascolto del server

app.use(express.text());

// Array per memorizzare gli studenti (questo è solo un esempio, in un'applicazione reale, dovresti utilizzare un database)
var students = [];

// API per inserire uno studente
app.post('/api/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).send(student);
});

// API per leggere tutti gli studenti inseriti
app.get('/api/students', (req, res) => {
  res.send(students.join('\n'));
});

// Endpoint per la somma
app.post('/api/somma', (req, res) => {
  const numeri_stringa = req.body;

  // Analizza i dati di testo in numeri
  const numbers = numeri_stringa.split(' ');

  const [num1, num2] = numbers;
  const result = Number(num1) + Number(num2);
  if (isNaN(result)) {
    res.status(400).send('La somma non è un numero valido.');
  } else {
    res.send(result.toString());
  }
});

// Avvia il server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});