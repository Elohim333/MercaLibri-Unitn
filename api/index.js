const Express = require("express");
const app = Express();

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

//get libri da mongodb
app.get('/api/libri', (request, response) => {
    database.collection("Libri").find({}).toArray((error, result) => {
        if(error) {
            console.log(error);
        }

        response.send(result);
    });
})

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