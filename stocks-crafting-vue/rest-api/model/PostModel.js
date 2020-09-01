const db = require('../database/dbConnection');


module.exports =  class PostModel {

    static addPost(dados, callback) {
        return (db.query("INSERT INTO POSTAGEM (TITULO, CONTEUDO) VALUES (?, ?"), 
        [dados.titulo, dados.conteudo]);
    }

    static getPosts(callback) {               
        //if(dados.pagina)
            //return 1; //TO DO PAGINAÇÃO
        //console.log("PostModel.getPosts => START");
        return db.query('SELECT * FROM POSTAGEM', callback);
    }


}