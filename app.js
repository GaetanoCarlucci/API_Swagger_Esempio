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

// Avvia il server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});