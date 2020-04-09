const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '5438',
    database: 'integral'
});

pool.getConnection( (err, connection) => {
    if (err) { console.log("If conexion", err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    } //console.log("If conexion err2", err);
    if (connection) connection.release()
    //console.log("Antes del return", connection);
    return
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