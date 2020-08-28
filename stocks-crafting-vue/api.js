const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const api = express();
const porta = 3000;
const router = express.Router();

const mongoose = require('mongoose');

api.use(cors());

api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json({limit: '20mb', extended: true}));

router.get("/", (req, resp) => resp.json({
    mensagem: '=> API Onlisne'
}));

//Connect to mongo


api.use("/", router);
api.listen(porta);
console.log('Run API Express');
