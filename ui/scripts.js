const app = document.getElementById('root');

<<<<<<< HEAD
=======
//var cors = require('cors')
//app.use(cors())


>>>>>>> a6a42d1bf89689cadd3715ac12ce9dfc9e68cf47

const container = document.createElement('div');
container.setAttribute('class', 'container');



const card = document.createElement('div');
card.setAttribute('class', 'card');

const h1 = document.createElement('h1');
h1.textContent = "ciccia";

container.appendChild(card);
card.appendChild(h1);

app.appendChild(container);

var request = new XMLHttpRequest();
<<<<<<< HEAD
request.open('GET', 'http://localhost/ingsoftware/databases/libri.json', true);
=======
request.open('GET', 'http://localhost/ingsoftware/databases/', true);
>>>>>>> a6a42d1bf89689cadd3715ac12ce9dfc9e68cf47
request.onload = function () {


    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
<<<<<<< HEAD
    data.libri.forEach(libro => {
        console.log(libro.phone);
    });
=======
>>>>>>> a6a42d1bf89689cadd3715ac12ce9dfc9e68cf47

}

request.send();