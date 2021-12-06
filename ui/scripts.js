const app = document.getElementById('root');


<<<<<<< HEAD

=======
>>>>>>> d404606 (modifica scripts.js)
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
request.open('GET', 'http://localhost/ingsoftware/api/libri', true);
request.onload = function () {


    if (request.status >= 200 && request.status < 400) {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        console.log(data);
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `THE API IS NOT WORKING!`;
        app.appendChild(errorMessage);
    }
=======
request.open('GET', 'http://localhost/ingsoftware/databases/', true);
request.onload = function () {


    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
    data.libri.forEach(libro => {
        console.log(libro.phone);
    });
>>>>>>> d404606 (modifica scripts.js)

}

request.send();