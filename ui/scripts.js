const app = document.getElementById('root');


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

}

request.send();