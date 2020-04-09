const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const obtenerFrutas = require('./bo');

app.get('/node', async function(req, res){
    const frutas = await obtenerFrutas();
    console.log("Terminando llamada", frutas);
    res.send(frutas);
});

app.listen(3000, () => {
    console.log("Escuchando puerto 3000");
})