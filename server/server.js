const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const bo = require('./bo');
const { variablesEntorno } = require('./variables-de-entorno');
const { variables } = variablesEntorno();

console.log("mI NOMBRE: ",variables.nombre);

app.get('/node/serv1', async function(req, res){
    const respuesta = await bo.obtenerFrutas();
    res.send(respuesta);
});

app.get('/node/serv2', async function(req, res){
    const respuesta = await bo.obtenerFrutasyLegumbres();
    res.send(respuesta);
});

app.get('/node/test', async function(req, res){
    res.send({
        error: false,
        mensaje: "Transacción exitosa"
    });
});

app.listen(3000, () => {
    console.log("Escuchando puerto 3000");
})