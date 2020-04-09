const ejecutarQuery = require('./db-connection');

const obtenerFrutas = async function(){
    const res = await ejecutarQuery("SELECT * FROM frutas");
    const frutas = res.results.map((fruta) => fruta);
    console.log(frutas);
    return frutas;
}

/*
const bo = (function() {

    async function obtenerFrutas(){
        const frutas = [];
        await ejecutarQuery('SELECT * FROM frutas')
        .then( (resp) => {
            return resp.results.map( (result) => {
                frutas.push({
                    id: result.id,
                    nombre: result.nombre
                });
            })
        }).catch( (err) => {
            console.log(err);
        });
        return frutas;
    }

    return {
        obtenerFrutas
    }
})();
*/
module.exports = obtenerFrutas;