
const variablesEntorno = function(){
    let variables = {};
    variables.nombre = process.env.NOMBRE ? process.env.NOMBRE : 'Noah';
    variables.db_url = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
    variables.db_user = process.env.DB_USER ? process.env.DB_USER : 'root';
    variables.db_password = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : '5438';
    variables.db_name = process.env.DB_NAME ? process.env.DB_NAME : 'integral';
    variables.ws_url = process.env.JAVA2_URL ? process.env.JAVA2_URL : 'http://localhost:3002/java2/serv1';
    console.log("var ",variables);
    return {
        variables
    };
}

module.exports.variablesEntorno = variablesEntorno;