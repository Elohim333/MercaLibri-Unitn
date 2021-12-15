const app = document.getElementById('root');



const container = document.createElement('div');
container.setAttribute('class', 'container');

var f = document.createElement("form");
f.setAttribute('class', 'container');
f.setAttribute('method', "post");
f.setAttribute('action','http://localhost:49146/api/libri/search/:titolo');



var i = document.createElement("input");
i.type = "text";
i.name = "titolo_libro";
i.id = "titolo";

var s = document.createElement("input");
s.type="submit";
s.value="Search";

f.appendChild(i);
f.appendChild(s);

app.appendChild(f);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:49146/api/libri', true);
request.onload = function () {


    if (request.status >= 200 && request.status < 400) {

        var data = JSON.parse(this.response);
        data.forEach(libro => {
            
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = libro.Titolo;

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