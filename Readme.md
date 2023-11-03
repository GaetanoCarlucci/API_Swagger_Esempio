# Documentazione API per un progetto di esempio per la 5 Informatica

Questo documento fornisce una guida su come installare Node.js, npm e Swagger per il progetto API esempio per la 5 Informatica

## Installazione di Node.js

1. Vai al sito ufficiale di Node.js: [https://nodejs.org/](https://nodejs.org/).

2. Scarica l'installer **LTS** (Long-Term Support) di Node.js per Windows. Assicurati di selezionare la versione consigliata LTS, che è la versione stabile più recente.

3. Esegui il file di installazione scaricato e segui le istruzioni dell'installatore.

4. Dopo l'installazione, verifica che Node.js sia stato installato correttamente aprendo il prompt dei comandi di Windows (cmd o powershell) e digitando i seguenti comandi:

   ```shell
   node -v
   ```
   
## Inizializzare il progetto 

Crea una nuova cartella per il tuo progetto e assicurati di avere un file package.json con le dipendenze necessarie. Puoi inizializzare un progetto Node.js con il seguente comando:

   ```shell
   npm init
   ```

Installa il framework Express.js:

   ```shell
   npm install express
   ```

## Installazione di Swagger

Per aggiungere Swagger alla applicazione Node.js, puoi utilizzare il modulo **Swagger UI Express** e **Swagger JS-Doc**.

Naviga nella cartella principale del tuo progetto Node.js utilizzando il prompt dei comandi di Windows.

Esegui il seguente comando per installare il modulo **Swagger UI Express** e **Swagger JS-Doc** nel tuo progetto:

  ```shell
  npm install swagger-ui-express swagger-jsdoc --save
  ```

## Uso dell'Applicazione di Gestione degli Studenti

Questa parte della documentazione fornisce informazioni su come utilizzare l'applicazione Node.js per la gestione degli studenti.

### Avvio del Server

Per avviare il server, assicurati di aver installato Node.js e npm. Quindi, segui questi passi:

1. Assicurati di essere nella directory del progetto.

2. Apri il terminale e esegui il seguente comando:

  ```shell
   node app_docs.js
   ```
In caso di mancanza di errori, il server sara' disponibile al seguente URL [http://localhost:3000](http://localhost:3000)

### Aggiunta di uno Studente
Per aggiungere uno studente alla lista, esegui una richiesta HTTP POST all'endpoint ```/api/students```. Invia il nome dello studente nel corpo della richiesta.

### Ottenere la Lista degli Studenti

Per ottenere la lista di tutti gli studenti inseriti, esegui una richiesta HTTP GET all'endpoint ```/api/students```. \
As esempio puoi accedere dal browser a questo link: [http://localhost:3000/api/students](http://localhost:3000/api/students)

### Somma di Due Numeri
Per eseguire la somma di due numeri, esegui una richiesta HTTP GET all'endpoint ```/api/somma```. Assicurati di includere i parametri num1 e num2 nell'URL.

## Documentazione OpenAPI

La documentazione Swagger è disponibile all'indirizzo [http://localhost:3000/api-docs](http://localhost:3000/api-docs). Puoi utilizzarla per esplorare le API in dettaglio.
