const express = require('express');
const router = require('./router/router');
const app = express();

//modelo da API JSON
app.use(express.json());
app.use('api/user', router);

//REQ -> Requisição
//RES -> Responsee
app.get('/healthcheck', (req, res) => {
    //200 -> OK
    return res.status(200).json({
        msg: 'Estamos vivos!',
        alive: true
    })
});

//Listen -> ouvir (8080)
app.listen(8080, () => {
    console.log("##############");
    console.log("Estamos online na http: 8080");
    console.log("##############");

});