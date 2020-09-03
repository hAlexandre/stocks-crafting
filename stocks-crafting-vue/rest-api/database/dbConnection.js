const mySql = require('mysql');

let conexao = mySql.createPool({    
    host:'localhost:3306',
    user: 'root',
    password: 'Familia32@',
    database: 'blog'
});

module.exports = conexao;
