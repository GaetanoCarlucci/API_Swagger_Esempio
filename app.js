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

// Endpoint per la somma con parametri nell'URL
app.get('/api/somma', (req, res) => {
  // Estrai i parametri num1 e num2 dalla query dell'URL
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);

  // Verifica se i parametri sono numeri validi
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('I parametri della somma non sono numeri validi.');
  } else {
    var result = num1 + num2;
    res.send(result.toString());
  }
});

// Avvia il server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});