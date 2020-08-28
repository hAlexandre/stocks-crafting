const mySql = require('mysql');

let conexao = mySql.createPool({    
    host:'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

module.exports = conexao;
