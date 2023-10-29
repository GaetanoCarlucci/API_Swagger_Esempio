const express = require('express');
const app = express();
const port = 3000; // Porta in ascolto del server
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Applicazione per la gestione degli studenti',
      version: '1.0.0',
      contact: {
        name: 'Esercizio per la 5 Informatica',
        email: 'gaetano.carlucci.sg28391@iissvoltadegemmis.edu.it',
        url: 'https://github.com/GaetanoCarlucci/API_Swagger_Esempio',
      },
    },
  },
  apis: ['app_doc.js'], // Sostituisci con il nome del tuo file principale
};

const swaggerSpec = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.text());

// Array per memorizzare gli studenti (questo è solo un esempio, in un'applicazione reale, dovresti utilizzare un database)
var students = [];

// API per inserire uno studente
/**
 * @openapi
 * /api/students:
 *   post:
 *     summary: Aggiungi uno studente
 *     description: Aggiunge uno studente alla lista degli studenti.
 *     requestBody:
 *       required: true
 *       content: 
 *         text/plain:
 *            schema:
 *              type: string
 *     responses:
 *       '201':
 *         description: Studente inserito con successo
 *     tags:
 *       - Studenti
 */
app.post('/api/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).send(student);
});

// API per leggere tutti gli studenti inseriti
/**
 * @openapi
 * /api/students:
 *   get:
 *     summary: Ottieni tutti gli studenti
 *     description: Restituisce una lista di tutti gli studenti inseriti.
 *     responses:
 *       '200':
 *         description: Elenco di studenti
 *         content:
 *           text/plain:
 *             example: 
 *               NomeStudente1
 *               NomeStudente2
 *     tags:
 *       - Studenti
 */
app.get('/api/students', (req, res) => {
  res.send(students.join('\n'));
});

// Endpoint per la somma con parametri nell'URL
/**
 * @openapi
 * /api/somma:
 *   get:
 *     summary: Esegue la somma di due numeri.
 *     description: Questo endpoint accetta due parametri numerici (num1 e num2) nell'URL e restituisce la loro somma.
 *     parameters:
 *       - in: query
 *         name: num1
 *         required: true
 *         schema:
 *           type: number
 *         description: Il primo numero da sommare.
 *       - in: query
 *         name: num2
 *         required: true
 *         schema:
 *           type: number
 *         description: Il secondo numero da sommare.
 *     responses:
 *       '200':
 *         description: Successo. Restituisce la somma dei due numeri.
 *         content:
 *           application/json:
 *             schema:
 *               type: number
 *               example: 12
 *       '400':
 *         description: Errore nei parametri della richiesta.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: I parametri della somma non sono numeri validi.
 *     tags:
 *       - Somma
 */
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