const express = require('express');
const app = express();
const port = 3000; // Porta in ascolto del server
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Domanda interrogazione',
      version: '1.0.0',
      contact: {
        name: 'interrogazione_1',
        email: 'gaetano.carlucci.sg28391@iissvoltadegemmis.edu.it',
        url: 'https://github.com/GaetanoCarlucci/API_Swagger_Esempio',
      },
    },
  },
  apis: ['interrogazione_1.js'], // Sostituisci con il nome del tuo file principale
};

const swaggerSpec = swaggerJsDoc(options);

app.use('/documentazione', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.text());

// Array per memorizzare gli studenti (questo è solo un esempio, in un'applicazione reale, dovresti utilizzare un database)
var students = [];

// API per inserire uno studente
/**
 * @openapi
 * ??path??:
 *   ??method??:
 *     summary: Aggiungi uno studente
 *     description: Aggiunge uno studente alla lista degli studenti.
 *     requestBody:
 *       required: XXX
 *       content: 
 *         XXX/YYY:
 *            schema:
 *              type: XXX
 *     responses:
 *       '201':
 *         description: Studente inserito con successo
 *     tags:
 *       - XXX
 */
app.post('/api/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).send(student);
});

// API per leggere tutti gli studenti inseriti
/**
 * @openapi
 * ??path??:
 *   ??method??:
 *     summary: Ottieni tutti gli studenti
 *     description: Restituisce una lista di tutti gli studenti inseriti.
 *     responses:
 *       '200':
 *         description: Elenco di studenti
 *         content:
 *           XXX/YYY:
 *             example: 
 *               - NomeStudente1
 *               - NomeStudente2
 *     tags:
 *       - XXX
 */
app.get('/api/students', (req, res) => {
  if (students.length === 0) {
    return res.status(400).send("Nessuno studente e' presente nella lista");
  }
  else{
    res.send(students.join('\n'));
  }
});

// Avvia il server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});