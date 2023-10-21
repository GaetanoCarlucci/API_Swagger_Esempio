# Documentazione del Progetto API esempio per la 5 Informatica

Questo documento fornisce una guida su come installare Node.js, npm e Swagger per il progetto API esempio per la 5 Informatica

## Installazione di Node.js

1. Vai al sito ufficiale di Node.js: [https://nodejs.org/](https://nodejs.org/).

2. Scarica l'installer **LTS** (Long-Term Support) di Node.js per Windows. Assicurati di selezionare la versione consigliata LTS, che è la versione stabile più recente.

3. Esegui il file di installazione scaricato e segui le istruzioni dell'installatore.

4. Dopo l'installazione, verifica che Node.js sia stato installato correttamente aprendo il prompt dei comandi di Windows (cmd o powershell) e digitando i seguenti comandi:

   ```shell
   node -v

## Inizializzare il progetto 

Crea una nuova cartella per il tuo progetto e assicurati di avere un file package.json con le dipendenze necessarie. Puoi inizializzare un progetto Node.js con il seguente comando:

   ```shell
   npm init

Installa il framework Express.js:

   ```shell
   npm install express

## Installazione di Swagger

Per aggiungere Swagger alla applicazione Node.js, puoi utilizzare il modulo **Swagger UI Express** e **Swagger JS-Doc**.

Naviga nella cartella principale del tuo progetto Node.js utilizzando il prompt dei comandi di Windows.

Esegui il seguente comando per installare il modulo **Swagger UI Express** e **Swagger JS-Doc** nel tuo progetto:

  ```shell
  npm install swagger-ui-express swagger-jsdoc --save
