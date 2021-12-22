var test = require('tape');
var request = require('supertest');
var app = require('../index.js');

var main = (function(){

    test('Get libri funzionante', function(t){
        request(app)
        .get('/api/libri')
        .expect('Content-type', /json/)
        .expect(200)
        .end(function(err, res){
            var expectedBooks =  [ { _id: '61c26e43eb2cac941725ca1d', idLibro: 1, Titolo: 'Harry Potter', Autore: 'J. k. Rowling', Materia: 'Letteratura', Valutazione: '5', Venditore: 'Luca Cavalcanti', Prezzo: '15.75', ISBN: 'IT04157AF53EL', Casa_editrice: 'Mondadori', Libro_universitario: '0' }, { _id: '61c26e43eb2cac941725ca1e', idLibro: 2, Titolo: 'Analisi 1', Autore: 'Romeo Brunetti', Materia: 'Analisi', Valutazione: '5', Venditore: 'Luca Cavalcanti', Prezzo: '15.74', ISBN: 'IT375G47FF833N', Casa_editrice: 'Mondadori', Libro_universitario: '1' }, { _id: '61c26e43eb2cac941725ca1f', idLibro: 3, Titolo: 'Analisi 2', Autore: 'Romeo Brunetti', Materia: 'Analisi', Valutazione: 
            '4', Venditore: 'Luca Cavalcanti', Prezzo: '21.62', ISBN: 'IT948J2893O3', Casa_editrice: 'Mondadori', Libro_universitario: '1' }, { _id: '61c26e43eb2cac941725ca20', idLibro: 4, Titolo: 'Algoritmi e Strutture dati', Autore: 'Alberto Montresor', Materia: 'ASD', Valutazione: '5', Venditore: 'Alberto Montresor', Prezzo: '20', ISBN: 'IT444IIAMSSII', Casa_editrice: 'Mondadori', Libro_universitario: '1' }, { _id: '61c26e43eb2cac941725ca21', idLibro: 5, Titolo: 'le notti bianche', Autore: 'Fëdor Dostoevskij', Materia: 'Narrativa', Valutazione: '5', Venditore: 'Mario Boldrin', Prezzo: '13.00', ISBN: 'IT04157AF53EF', Casa_editrice: 'Mondadori', Libro_universitario: '0' } ];
            t.error(err, 'No error');
            t.same(res.body, expectedBooks, 'Books as expected');
            t.end();
        })
    })

    test('Search libri funzionante', function(t){
        request(app)
        .get('/api/libri/search/Harry Potter')
        .expect('Content-type', /json/)
        .expect(200)
        .end(function(err, res){
            var expectedBooks =  [ {_id: '61c26e43eb2cac941725ca1d', idLibro: 1, Titolo: 'Harry Potter', Autore: 'J. k. Rowling', Materia: 'Letteratura', Valutazione: '5', Venditore: 'Luca Cavalcanti', Prezzo: '15.75', ISBN: 'IT04157AF53EL', Casa_editrice: 'Mondadori', Libro_universitario: '0' } ];
            t.error(err, 'No error');
            t.same(res.body, expectedBooks, 'Books searched as expected');
            t.end();
        })
    })

    test('Filtro libri funzionante', function(t){
        request(app)
        .get('/api/libri/filtro/Prezzo')
        .expect('Content-type', /json/)
        .expect(200)
        .end(function(err, res){
            var expectedBooks =  [ { _id: '61c26e43eb2cac941725ca1f', idLibro: 3, Titolo: 'Analisi 2', Autore: 'Romeo Brunetti', Materia: 'Analisi', Valutazione: '4', Venditore: 'Luca Cavalcanti', Prezzo: '21.62', ISBN: 'IT948J2893O3', Casa_editrice: 'Mondadori', Libro_universitario: '1' }, { _id: '61c26e43eb2cac941725ca20', idLibro: 4, Titolo: 'Algoritmi e Strutture dati', Autore: 'Alberto Montresor', Materia: 'ASD', Valutazione: '5', Venditore: 'Alberto Montresor', Prezzo: '20', ISBN: 'IT444IIAMSSII', Casa_editrice: 'Mondadori', Libro_universitario: '1' }, { _id: '61c26e43eb2cac941725ca1d', idLibro: 1, Titolo: 'Harry Potter', Autore: 'J. k. Rowling', Materia: 'Letteratura', 
            Valutazione: '5', Venditore: 'Luca Cavalcanti', Prezzo: '15.75', ISBN: 'IT04157AF53EL', Casa_editrice: 'Mondadori', Libro_universitario: '0' }, { _id: '61c26e43eb2cac941725ca1e', idLibro: 2, Titolo: 'Analisi 1', Autore: 
            'Romeo Brunetti', Materia: 'Analisi', Valutazione: '5', Venditore: 'Luca Cavalcanti', Prezzo: '15.74', ISBN: 'IT375G47FF833N', Casa_editrice: 'Mondadori', Libro_universitario: '1' }, { _id: '61c26e43eb2cac941725ca21', idLibro: 5, Titolo: 'le notti bianche', Autore: 'Fëdor Dostoevskij', Materia: 'Narrativa', Valutazione: '5', Venditore: 'Mario Boldrin', Prezzo: '13.00', ISBN: 'IT04157AF53EF', Casa_editrice: 'Mondadori', Libro_universitario: '0' } ];
            t.error(err, 'No error');
            t.same(res.body, expectedBooks, 'Books as expected');
            t.end();
        })
    })

    test('Post libri funzionante', function (assert) {
        var newThing = [ { "Titolo": "APSSOD039291JAM", Autore: 'J. k. Rowling', Materia: 'Letteratura', Valutazione: '5', Venditore: 'Luca Cavalcanti', Prezzo: '15.75', ISBN: 'IT04157AF53EL', Casa_editrice: 'Mondadori', Libro_universitario: '0' }];
        request(app)
          .post('/api/libri')
          .send(newThing)
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            var actualThing = res.body;
       
            assert.error(err, 'No error');
            assert.same(actualThing, 'Added Successfully', 'Libro aggiunto');
            assert.end();
          });
      });

      test('Delete libri funzionante', function (assert) {
        request(app)
          .delete('/api/libri/6')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
       
            assert.error(err, 'No error');
            assert.same(res.body, 'Libro cancellato', 'Libro cancellato');
            assert.end();
          });
      });
}
);

setTimeout(main, 2000);