const mySql = require('mysql');

let connection = mySql.createPool({
    host:'localhost',
    user = 'root',
    password = '',
    database = 'post'
});

module.exports = connection;
