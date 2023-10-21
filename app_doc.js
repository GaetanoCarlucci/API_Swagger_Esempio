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
        name: 'Esercizio per la 5',
        email: 'pippo@appunti.it',
        url: 'https://www.esempio.it/',
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
 * @swagger
 * /api/students:
 *   post:
 *     summary: Aggiungi uno studente
 *     description: Aggiunge uno studente alla lista degli studenti.
 *     requestBody:
 *       required: true
 *       content:
 *         text/plain:
 *           schema:
 *             type: string
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
 * @swagger
 * /api/students:
 *   get:
 *     summary: Ottieni tutti gli studenti
 *     description: Restituisce una lista di tutti gli studenti inseriti.
 *     responses:
 *       '200':
 *         description: Elenco di studenti
 *         content:
 *           text/plain:
 *             example: |
 *               NomeStudente1
 *               NomeStudente2
 *     tags:
 *       - Studenti
 */
app.get('/api/students', (req, res) => {
  res.send(students.join('\n'));
});

// Avvia il server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});