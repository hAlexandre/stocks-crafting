const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const api = express();


const porta = 3000;
const router = express.Router();



api.use(cors());

api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json({limit: '20mb', extended: true}));

router.get("/", (req, resp) => resp.json({
    mensagem: '=> API Onlisne'
}));



const postRouter = require('./rest-api/router/PostRouter.js');


api.use("/", router);
api.use("/blog", postRouter);

//api.listen(porta);
//
const fs = require ('fs');
const path = require('path');
const https = require ('https');
const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'server', 'ssl' , 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'server', 'ssl', 'server.key'))
}
https.createServer(httpsOptions, api).listen(3000);


console.log('Run API Express');
