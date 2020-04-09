const ejecutarQuery = require('./db-connection');
const obtenerLegumbresDeServicio = require('./wscliente');

const obtenerFrutas = async function(){
    try{
        const res = await ejecutarQuery("SELECT * FROM frutas");
        const frutas = res.results.map((fruta) => fruta);
        console.log(frutas);
        return {
            error: false,
            mensaje: "Transacción exitosa",
            frutas
        };
    }catch(e){
        console.log(e);
        return {
            error: true,
            mensaje: "Error en transacción: "+e.message
        };
    }
}

const obtenerFrutasyLegumbres = async function(){
    try{
        const frutas = await obtenerFrutas();
        if(frutas.error){
            throw new Error(error.mensaje);
        }
        const legumbres = await obtenerLegumbresDeServicio();
        console.log("Legumbres", legumbres);
        frutas.legumbres = legumbres;
        return frutas;
    }catch(e){
        return {
            error: true,
            mensaje: "Error en transacción: "+e.message
        };
    }
    
};

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
module.exports = {
    obtenerFrutas,
    obtenerFrutasyLegumbres
};