# INGSOFTWARE-G04
Progetto 2021 ingegneria del software G04 - MercaLibri Unitn
<br/>
Il sistema qui presentato rappresenta un mock-up dell'idea descritta nel primo documento del G03, considerando solamente l'attore "Utente autenticato".
<br/>
<br/>
<h4>!!!----LEGGERE CON ATTENZIONE----!!!</h4>
Il sistema ha incorporato il sistema di testing. Se lo si vuole provare, è altamente consigliato eseguirlo prima di QUALSIASI ALTRA COSA, in quanto un qualsiasi cambiamento nella collection di MongoDB causerà un errore nella ricerca del match tra il valore expected e il valore restituito effettivo dalle API. Grazie.
<br/>
<br/>
<h4>INSTALLAZIONE</h4>
Per installare e usare il sistema MercaLibri Unitn, è sufficiente scaricare la repository zippata ed estrarla in una cartella di vostra scelta. Dopodichè fate partire il server eseguendo da shell il comando "npm start" dopo esservi recati nella directory "../MercaLibri-Unitn-main/api". Dopodichè per visualizzare il client aprite il file "index.html" contenuta all'interno di "../MercaLibri-Unitn-main/ui".
<br/>
Alternativamente, il comando per eseguire il testing è "npm test", da lanciare sempre quando si è all'interno della directory api.
<br/>
<br/>
<h4>WIKI</h4>
La wiki del sistema è disponibile al link https://github.com/Elohim333/MercaLibri-Unitn/wiki
<h4>SISTEMI UTILIZATI</h4>
MongoDB per avere delle collezioni online
<br/>
NodeJS per la gestione delle API con relativi moduli:
    <br/>
    - body-parser 1.19.1
    <br/>
    - cors 2.8.5
    <br/>
    - express 4.17.2
    <br/>
    - mongodb 4.2.1
    <br/>
    - nodemon 2.0.15
    <br/>
    - supertest 6.1.6
<br/>
- swagger-jsdoc 6.1.0
<br/>
- swagger-ui-express 4.2.0
<br/>
- tap-spec 5.0.0
<br/>
- tape 5.3.2
<br/>
- vue 2.6.14
<br/>
Visual Studio Code per la visualizzazione e l'editing dei file di sistema, con l'ausilio del modulo Live Server per poter visualizzare il client
<br/>
Github e git per il salvataggio remoto della repository e per la sincronizzazione del lavoro di gruppo
<br/>
Google Docs per la scrittura del documento riassuntivo del sistema.
<br/>
<br/>
<h4>CONTRIBUTORS</h4>
Biancuzz
<br/>
francescoboldrin
<br/>
Elohim333
<br/>
