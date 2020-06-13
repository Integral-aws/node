const mysql = require('mysql');
const util = require('util');
const { variablesEntorno } = require('./variables-de-entorno');
const { variables } = variablesEntorno();

const pool = mysql.createPool({
    host: variables.db_url,
    user: variables.db_user,
    password: variables.db_password,
    database: variables.db_name
});

pool.getConnection( (err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }else if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }else if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }else if (err.code === 'ENOTFOUND') {
            console.error('Database not found.')
        }else{
            console.log("Error desconocido al conectar con BD.");
        }
    } //console.log("If conexion err2", err);
    if (connection) connection.release();
    //console.log("Antes del return", connection);
    return;
});

const ejecutarQuery = function(query) {
    return new Promise( (resolve, reject) => {
        pool.query(query, function(error, results, fields){
            if(error) reject(error)
            resolve({
                results,
                fields
            })
        });
    });
}

//pool.query = util.promisify(pool.query);

module.exports = ejecutarQuery;