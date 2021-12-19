const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');


const h1 = document.createElement('h1');
h1.textContent = "RECENSIONI";

const homeButton = document.createElement('form');
const inputButton = document.createElement('input');
homeButton.action = "index.html";
inputButton.type = "submit"; inputButton.value = "Home";

homeButton.appendChild(inputButton);


container.appendChild(homeButton);
container.appendChild(h1);

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:49146/api/users', true);
request.onload = function () {


    if (request.status >= 200 && request.status < 400) {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        data.forEach(utente => {
            
            if(utente.Nome == "Gianni"){
                utente.Recensioni.forEach(recensione => {
                    const card = document.createElement('div');
                    card.setAttribute('class', 'card');

                    const h1 = document.createElement('p');
                    h1.textContent = recensione.Utente + ":";
                    
                    const h2 = document.createElement('p');
                    h2.textContent = "Voto: " + recensione.Valutazione;
                    
                    const h3 = document.createElement('p');
                    h3.textContent = "'" + recensione.Testo + "'";

                    
                    const br = document.createElement('br');

                    container.appendChild(card);
                    card.appendChild(h1);
                    card.appendChild(h2);
                    card.appendChild(h3);
                    card.appendChild(br);
                })
            }

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