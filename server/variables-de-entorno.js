
const variablesEntorno = function(){
    let variables = {};
    variables.nombre = process.env.NOMBRE ? process.env.NOMBRE : 'Noah';
    variables.url_db = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
    variables.ws_url = process.env.JAVA2_URL ? process.env.JAVA2_URL : 'localhost';
    console.log("var ",variables);
    return {
        variables
    };
}

module.exports.variablesEntorno = variablesEntorno;