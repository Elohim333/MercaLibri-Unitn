const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:49146/api/libri', true);
request.onload = function () {


    if (request.status >= 200 && request.status < 400) {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        data.libri.forEach(libro => {
            
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = libro.email;

            container.appendChild(card);
            card.appendChild(h1);
        }
            )
        card.appendChild(h1);
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `THE API IS NOT WORKING!`;
        app.appendChild(errorMessage);
    }

}

request.send();