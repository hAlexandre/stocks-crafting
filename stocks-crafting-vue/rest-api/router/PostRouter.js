const express = require('express');
const router = express.Router();

const PostModel = require('../model/PostModel');
const RespostaClass = require('../model/RespostaClass');

router.get("/", function (req, resp, next){
    console.log("postRouter => OK");        
    PostModel.getPosts(function(error, retorno){
        let resposta = new RespostaClass();
        if(error) {
            resposta.erro = true; 
            resposta.msg = "ERRO AO LISTAR";
            console.log("erro:", error);
        } else {            
            resposta.dados = retorno;
        }
        resp.json(resposta);
    });
});

module.exports = router;

