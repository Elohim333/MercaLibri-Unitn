const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');


const h1 = document.createElement('h1');
h1.textContent = "AREA PERSONALE";

const a = document.createElement('a');
a.textContent = "Home";
a.href = "index.html";
a.target = "_blank";


container.appendChild(a);
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
                
            const card1 = document.createElement('div');
            card1.setAttribute('class', 'card');

            const pName = document.createElement('p');
            pName.textContent = "NOME: " + utente.Nome;
            const pSurname = document.createElement('p');
            pSurname.textContent = "COGNOME: " + utente.Cognome;
            const pMail = document.createElement('p');
            pMail.textContent = "MAIL DI ATENEO: " + utente.Mail_ateneo;
            const pPaypalMail = document.createElement('p');
            pPaypalMail.textContent = "MAIL PERSONALE: " + utente.Mail_personale;
            
            
            const a2 = document.createElement('a');
            a2.textContent = "Modifica mail personale";
            a2.href = "modificaMail.html";
            a2.target = "_blank";

            const br = document.createElement('br');

            container.appendChild(card1);
            card1.appendChild(pName);
            card1.appendChild(pSurname);
            card1.appendChild(pMail);
            card1.appendChild(pPaypalMail);
            card1.appendChild(a2);
            card1.appendChild(br);
            
            
            const card2 = document.createElement('div');
            card2.setAttribute('class', 'card');

            const pLibriVendita = document.createElement('p');
            pLibriVendita.textContent = "LIBRI IN VENDITA: " + utente.Libri_in_vendita;
            const pLibriVenduti = document.createElement('p');
            pLibriVenduti.textContent = "LIBRI VENDUTI: " + utente.Libri_venduti;
            const pLibriComprati = document.createElement('p');
            pLibriComprati.textContent = "LIBRI COMPRATI: " + utente.Libri_comprati;
            const pValutazioneMedia = document.createElement('p');
            pValutazioneMedia.textContent = "VALUTAZIONE MEDIA: " + utente.Valutazione_media;
            

            const a3 = document.createElement('a');
            a3.textContent = "Recensioni ottenute";
            a3.href = "recensioni.html";
            a3.target = "_blank";


            const a4 = document.createElement('a');
            a4.textContent = "Lista Preferiti";
            a4.href = "listaPreferiti.html";
            a4.target = "_blank";

            container.appendChild(card2);
            card2.appendChild(pLibriVendita);
            card2.appendChild(pLibriVenduti);
            card2.appendChild(pLibriComprati);
            card2.appendChild(pValutazioneMedia);
            card2.appendChild(a3);
            card2.appendChild(br);
            card2.appendChild(a4);
            }
        }
            )
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `THE API IS NOT WORKING!`;
        app.appendChild(errorMessage);
    }

}

request.send();
