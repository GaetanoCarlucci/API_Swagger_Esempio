const express = require('express');
const app = express();
const port = 3000; // Porta in ascolto del server
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Domanda interrogazione 2',
      version: '1.0.0',
      contact: {
        name: 'interrogazione_2',
        email: 'gaetano.carlucci.sg28391@iissvoltadegemmis.edu.it',
        url: 'https://github.com/GaetanoCarlucci/API_Swagger_Esempio',
      },
    },
  },
  apis: ['interrogazione_2.js'], // Sostituisci con il nome del tuo file principale
};

const swaggerSpec = swaggerJsDoc(options);

app.use('/documentazione', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.text());

// Endpoint per la somma con parametri nell'URL
/**
 * @openapi
 * ??path??:
 *   ??method??:
 *     summary: Esegue la somma di XXX numeri.
 *     description: Questo endpoint accetta tre parametri numerici (num1, num2 e num3) nell'URL e restituisce la loro somma.
 *     parameters:
 *       - in: query
 *         name: num1
 *         required: XXX
 *         schema:
 *           type: XXX
 *         description: Il primo numero da sommare.
 *       - in: query
 *         name: num2
 *         required: XXX
 *         schema:
 *           type: XXX
 *         description: Il secondo numero da sommare.
 *     responses:
 *       '200':
 *         description: Successo. Restituisce la somma dei tre numeri.
 *         content:
 *           XXX/YYY:
 *             schema:
 *               type: object
 *               properties:
 *                 sum:
 *                   type: number
 *               example: { "sum": 12 }
 *       '400':
 *         description: Errore nei parametri della richiesta.
 *         content:
 *           XXX/YYY:
 *             schema:
 *               type: XXX
 *               properties:
 *                 error:
 *                   type: XXX
 *               example: { "error": "I parametri della somma non sono numeri validi." }
 *     tags:
 *       - Modificare qui
 */
app.get('/api/somma', (req, res) => {
  // Estrai i parametri num1, num2 e num3 dalla query dell'URL
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);

  if (!('num1' in req.query)) {
    res.status(412).json({ error: 'Manca almeno un parametro richiesto' });
    return;
  }

  if (!('num2' in req.query)) {
    res.status(412).json({ error: 'Manca almeno un parametro richiesto' });
    return;
  }


  // Verifica se i parametri sono numeri validi
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'I parametri della somma non sono numeri validi.' });
  } else {
    var result = num1 + num2;
    res.json({ sum: result });
  }
});

// Avvia il server su localhost
app.listen(port, 'localhost', () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});