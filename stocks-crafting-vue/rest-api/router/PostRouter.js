const express = require('express');
const router = express.Router();

const PostModel = require('../model/PostModel');
const RespostaClass = require('../model/RespostaClass');

router.get("/blog", function (req, resp, next){
    PostModel.getPosts(function(error, retorno){
        let resposta = new RespostaClass();
        if(error) {
            resposta.erro = true;
            resposta.msg = "ERRO AO LISTAR"
        }
    });
});

