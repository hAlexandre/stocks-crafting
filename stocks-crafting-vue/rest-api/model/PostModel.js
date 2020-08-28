const db = require('../database/dbConnection');

class PostModel {
    static addPost(dados, callback) {
        return (db.query("INSERT INTO POSTAGEM (TITULO, CONTEUDO) VALUES (?, ?"), 
        [dados.titulo, dados.conteudo]);
    }

    static getPosts(dados, callback) {
        if(dados.pagina)
            return 1; //TO DO PAGINAÇÃO
        
        return db.query("SELECT * FROM POSTAGEM", callback);
    }


}