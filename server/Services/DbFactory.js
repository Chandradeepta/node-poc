const mysql = require('mysql');

function getDbConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Deep.laha4@',
        database: 'student'
    })
    return connection;
}

module.exports = getDbConnection;