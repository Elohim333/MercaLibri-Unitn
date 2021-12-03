const Express = require("express");
const app = Express();

var fs = require('fs');

var cors = require('cors')
app.use(cors())

// module to parse the API body request
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.listen(49146, () => {
    console.log("APIs Running");


});

app.get('C:\\Users\\Utente\\Desktop\\IS2021_API_G04\\databases', (request, response) => {
    var data = fs.readFileSync('libri.json');
    var myObject = JSON.parse(data);
    
    response.send(myObject);
})