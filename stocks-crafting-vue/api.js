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
    mensagem: '=> API Online'
}));

api.use("/", router);
api.listen(porta);
console.log('Run API Express');
