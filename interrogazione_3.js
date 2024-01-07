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
        name: 'interrogazione_3',
        email: 'gaetano.carlucci.sg28391@iissvoltadegemmis.edu.it',
        url: 'https://github.com/GaetanoCarlucci/API_Swagger_Esempio',
      },
    },
  },
  apis: ['interrogazione_3.js'], // Sostituisci con il nome del tuo file principale
};

const swaggerSpec = swaggerJsDoc(options);

app.use('/documentazione', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.text());

// Endpoint per la divisione con parametri nell'URL
/**
 * @openapi
 * ??path??:
 *   ??method??:
 *     summary: Esegue la divisione di due numeri.
 *     description: Questo endpoint accetta due parametri numerici (dividendo, divisore) nell'URL e restituisce il risultato della loro divisione.
 *     parameters:
 *       - in: query
 *         name: XXX
 *         required: XXX
 *         schema:
 *           type: XXX
 *         description: Il numero da dividere (dividendo).
 *       - in: query
 *         name: divisore
 *         required: XXX
 *         schema:
 *           type: XXX
 *         description: Il numero con cui dividere (divisore). Il numero non deve essere = 0
 *     responses:
 *       '200':
 *         description: Successo. Restituisce il risultato della divisione dei due numeri.
 *         content:
 *           XXX/YYY:
 *             schema:
 *               type: XXX
 *               example: XXX
 *       '400':
 *         description: Errore nei parametri della richiesta.
 *         content:
 *           XXX/YYY:
 *             schema:
 *               type: XXX
 *               example: I parametri della divisione non sono numeri validi.
 *     tags:
 *       - Calcoli
 */
app.get('/api/divisione', (req, res) => {
  // Estrai i parametri dividendo e divisore dalla query dell'URL
  var dividendo = Number(req.query.dividendo);
  var divisore = Number(req.query.divisore);

  // Verifica se i parametri sono presenti
  if (!req.query.dividendo || !req.query.divisore) {
    return res.status(400).send('Manca almeno un parametro richiesto.');
  }

  // Verifica se i parametri sono numeri validi
  if (isNaN(dividendo) || isNaN(divisore)) {
    return res.status(400).send('I parametri della divisione non sono numeri validi.');
  }

  // Verifica se il divisore è zero e gestisci l'errore
  if (divisore === 0) {
    return res.status(422).send('Il divisore non può essere zero.');
  }

  // Esegui la divisione
  var result = dividendo / divisore;
  res.send(result.toString());
});

// Avvia il server su localhost
app.listen(port, 'localhost', () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});