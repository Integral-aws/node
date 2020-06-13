const axios = require('axios');
const { variablesEntorno } = require('./variables-de-entorno');
const { variables } = variablesEntorno();

const obtenerLegumbresDeServicio = async function(){
    return await axios.get(variables.ws_url)
        .then( (response) => { console.log(response.data);
            if(response.data.error){
                throw new Error("Error en el servicio: "+data.mensaje);
            }
            return response.data.legumbres;
        })
        .catch( (error) => {console.log(error);throw new Error("Error al consultar el servicio")});
    /*return new Promise( (resolve, reject) => {
        axios.get("http://localhost:3002/java2/serv1")
            .then( (respuesta) => resolve(respuesta))
            .catch((error) => reject(error));
    }); */
};

module.exports = obtenerLegumbresDeServicio;