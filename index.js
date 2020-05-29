const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Israel Meléndez Tejeda',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/VanGogh', (req, res)=>{
    res.render('VanGogh', {
        autor : 'Israel Meléndez Tejeda',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
});

app.get('/Diego', (req, res)=>{
    res.render('DiegoRivera', {
        autor : 'Israel Meléndez Tejeda',
        year : new Date().getFullYear(),
        title : 'Diego Rivera'
    });
});

app.get('/davinci', (req, res)=>{
    res.render('DaVinci', {
        autor : 'Israel Meléndez Tejeda 4°E',
        year : new Date().getFullYear(),
        title : 'Leonardo da Vinci',
    });
});
app.get('/EdvardMunch', (req, res)=>{
    res.render('EdvardMunch', {
        autor : 'Israel Meléndez Tejeda',
        year : new Date().getFullYear(),
        title : 'Edvard Munch',
    });
});
//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});
