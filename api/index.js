const Express = require("express");
var app = Express();


// modules to generate APIs documentation
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API per il progetto MercaLibri Unitn',
            version: '1.0.0',
            description:
                'This is a REST API application made with Express.',
            license: {
                name: 'Licensed Under MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'Group04',
                url: 'http://localhost:49146/ui/index.html',
            },
        },
        servers: [
            {
                url: 'http://localhost:49146/',
                description: 'Development server',
            },
        ],
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

var fs = require('fs');
var MongoClient = require("mongodb").MongoClient;

var CONNECTION_STRING = "mongodb+srv://G04:pass_g04@mlbcluster.93p18.mongodb.net/test"

var cors = require('cors')
app.use(cors())

// module to parse the API body request
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
var DATABASE = "MercaLibri_Unitn";
var database;


app.listen(49146, () => {
    MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, 
    useUnifiedTopology: true}, (error, client) => {
        if(error){
            console.log("Error connecting at the MongoDB: " + error);
        } else {
            database = client.db(DATABASE);
            console.log("Mongo DB Connection Successful, APIs running");
        }
    })
});

/*
//get libri con json locale
app.get('/api/libri', (request, response) => {
    var data = fs.readFileSync('libri.json');
    var myObject = JSON.parse(data);
    
    response.send(myObject);
})
*/


/**
 * @swagger
 * /api/libri:
 *   get:
 *     tags: 
 *     - book
 *     summary: Retrieve a list of books.
 *     description: Retrieve a list of books from the MongoDB "Libri" collection.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ISBN:
 *                         type: string
 *                       titolo:
 *                         type: string
 *                         example: Analisi Matematica 1
 *                       autore:
 *                         type: string
 *                         example: Romeo Brunetti
 *                       materia:
 *                         type: string
 *                         example: Analisi
 *                       valutazione:
 *                         type: integer
 *                       venditore:
 *                         type: string
 *                       prezzo:
 *                         type: number
 *                       casa_editrice:
 *                         type: string
 *                       libro_universitario:
 *                         type: boolean
 */

app.get('/api/libri', (request, response) => {
    database.collection("Libri").find({}).toArray((error, result) => {
        if(error) {
            console.log(error);
        }

        response.send(result);
    });
})

/*app.get('/api/libri/search/:titolo', (request, response) => {
    database.collection("Libri").find({"Titolo":request.params.titolo}).toArray((error, result) => {
        if(error) {
            console.log(error);
        }
        response.send(result);
    });
})*/

/**
 * @swagger
 * /api/libri/search/{titolo}:
 *   get:
 *     tags: 
 *     - book
 *     summary: Retrieve a specific list of books.
 *     description: Retrieve a list of books from the MongoDB "Libri" collection, given a search parameter.
 *     parameters:
 *     - in: path
 *       name: titolo
 *       description: String contained in one or multiple books
 *       required: true
 *       schema:
 *         type: string
 *         example: Harry
 *     responses:
 *       200:
 *         description: A list of books containing the input string.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ISBN:
 *                         type: string
 *                       titolo:
 *                         type: string
 *                         example: Harry Potter
 *                       autore:
 *                         type: string
 *                         example: J.K. Rowling
 *                       materia:
 *                         type: string
 *                         example: Magia
 *                       valutazione:
 *                         type: integer
 *                       venditore:
 *                         type: string
 *                       prezzo:
 *                         type: number
 *                       casa_editrice:
 *                         type: string
 *                       libro_universitario:
 *                         type: boolean
 */

app.get('/api/libri/search/:titolo', (request, response) => {
database.collection("Libri").find({"Titolo": new RegExp('.*' + request.params.titolo + '.*')}).toArray((error, result) => {
        if(error) {
            console.log(error);
        }
        response.send(result);
    });
})

/**
 * @swagger
 * /api/libri/filtro/{filtro}:
 *   get:
 *     tags: 
 *     - book
 *     summary: Filter books.
 *     description: Retrieve a list of books from the MongoDB "Libri" collection, given a filter parameter.
 *     parameters:
 *     - in: path
 *       name: filtro
 *       description: Filter type ("Prezzo", "Titolo", "Valutazione")
 *       required: true
 *       schema:
 *         type: string
 *         example: Prezzo
 *     responses:
 *       200:
 *         description: A list of books containing the input string.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ISBN:
 *                         type: string
 *                       titolo:
 *                         type: string
 *                         example: Harry Potter
 *                       autore:
 *                         type: string
 *                         example: J.K. Rowling
 *                       materia:
 *                         type: string
 *                         example: Magia
 *                       valutazione:
 *                         type: integer
 *                       venditore:
 *                         type: string
 *                       prezzo:
 *                         type: number
 *                       casa_editrice:
 *                         type: string
 *                       libro_universitario:
 *                         type: boolean
 */

app.get('/api/libri/filtro/:filtro', (request, response) => {
    switch(request.params.filtro){
        case "Prezzo":
            database.collection("Libri").find({}).sort({"Prezzo": -1}).toArray((error, result) => {
                if(error) {
                    console.log(error);
                }
        
                response.send(result);
            });
        break;
        case "Titolo":
            database.collection("Libri").find({}).sort({"Titolo": 1}).toArray((error, result) => {
                if(error) {
                    console.log(error);
                }
        
                response.send(result);
            });
        break;
        case "Valutazione":
            database.collection("Libri").find({}).sort({"Valutazione": -1}).toArray((error, result) => {
                if(error) {
                    console.log(error);
                }
        
                response.send(result);
            });
        break;
        default:
            database.collection("Libri").find({}).toArray((error, result) => {
                if(error) {
                    console.log(error);
                }
        
                response.send(result);
            });
        break;
    }
    
});

/**
 * @swagger
 * /api/libri:
 *   post:
 *     tags:
 *     - book
 *     summary: Add a new book to the store
 *     consumes:
 *     - application/json
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: body
 *       name: body
 *       description: book object that needs to be added to the store
 *       required: true
 *       schema:
 *         book:
 *           type: object
 *           required:
 *           - ISBN
 *           - titolo
 *           - autore
 *           - materia
 *           - valutazione
 *           - venditore
 *           - prezzo
 *           - casa_editrice
 *           - libro_universitario
 *           properties:
 *             ISBN:
 *               type: string
 *             titolo:
 *               type: string
 *               example: Analisi Matematica 1
 *             autore:
 *               type: string
 *               example: Romeo Brunetti
 *             materia:
 *               type: string
 *               example: Analisi
 *             valutazione:
 *               type: integer
 *             venditore:
 *               type: string
 *             prezzo:
 *               type: number
 *             casa_editrice:
 *               type: string
 *             libro_universitario:
 *               type: boolean
 *     responses:
 *       200:
 *         description: Book added succesfully
 */

app.post('/api/libri', (request, response) => {
    database.collection("Libri").count({}, function (error, numOfDocs) {
        if(error) {
            console.log(error);
        }

        database.collection("Libri").insertOne({
            idLibro: numOfDocs + 1,
            Titolo: request.body['Titolo'],
            Autore: request.body['Autore'],
            Materia: request.body['Materia'],
            Valutazione: request.body['Valutazione'],
            Venditore: request.body['Venditore'],
            Prezzo: request.body['Prezzo'],
            ISBN: request.body['ISBN'],
            Casa_editrice: request.body['Casa_editrice'],
            Libro_universitario: request.body['Libro_universitario']
        });

        response.json("Added Successfully");
        //app.location = "venditaSuccess.html";
    })
})


/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: 
 *     - user
 *     summary: Retrieve a list of users.
 *     description: Retrieve a list of users from the MongoDB "Utenti" collection.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Nome:
 *                         type: string
 *                         example: Gianni
 *                       Cognome:
 *                         type: string
 *                         example: Verdi
 *                       Mail_ateneo:
 *                         type: string
 *                         example: gianni.verdi@unitn.it
 *                       Mail_personale:
 *                         type: string
 *                         example: giannigreen@gmail.com
 *                       Libri_in_vendita:
 *                         type: integer
 *                       Libri_comprati:
 *                         type: integer
 *                       Valutazione_media:
 *                         type: double
 *                       Libri_venduti:
 *                         type: integer
 *                       Recensioni:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             Utente:
 *                               type: string
 *                             Valutazione:
 *                               type: integer
 *                             Testo:
 *                               type: string
 */

//get users da mongodb
app.get('/api/users', (request, response) => {
    database.collection("Utenti").find({}).toArray((error, result) => {
        if(error) {
            console.log(error);
        }

        response.send(result);
    });
})

/**
 * @swagger
 * /api/users:
 *   put:
 *     tags:
 *     - user
 *     summary: Edit the user's personal email
 *     consumes:
 *     - application/json
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: body
 *       name: mail
 *       description: mail that needs to be updated. Please test this api in our own server, as the request is sent via form and it doesn't support the PUT method. We instead use a trick calling a post api and setting a hidden input to "put", so we know that we have to update a mail.
 *       required: true
 *       schema:
 *         VecchiaMail:
 *           type: string
 *         NuovaMail:
 *           type: string
 *         ConfermaMail:
 *           type: string
 *         method:
 *           type: string
 *           example: put
 *           required: true
 *     responses:
 *       200:
 *         description: Mail aggiornata con successo
 */

//aggiorna mail paypal utente
app.post('/api/users', (request, response) => {
    if(request.body['method'] == 'put'){
        if(request.body['NuovaMail'].localeCompare(request.body['ConfermaMail'])==0){
            database.collection("Utenti").updateOne(
                {
                    "Mail_personale": request.body['VecchiaMail']
                },
                {
                    $set:
                    {
                        "Mail_personale": request.body['NuovaMail']
                    }
                }
            );
        
            response.json("Mail aggiornata con successo");
        }
        else response.json("Nuova mail e mail re-inserita non uguali");
    }
    else response.json("Errore");
})

