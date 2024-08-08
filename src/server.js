const express = require('express');
const router = require('./router/router');
const sequelize = require('./config/config');
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
/*app.listen(8080, () => {

    sequelize
    
    console.log("##############");
    console.log("Estamos online na http: 8080");
    console.log("##############");

});*/
sequelize.authenticate()
// Irá verificar se tem o banco de dados criado
.then(() =>{
    console.log("Conexão estabelecida com sucesso");
    return sequelize.sync();
})
//Caso tenha o banco de dados criado, irá rodar, se não dará erro
.then(() => {
    app.listen(8080, () => {
    console.log("##############");
    console.log("Rodando na porta 8080");
    console.log("##############");
    });
})
.catch((error) => {
    console.log("Erro ao se conectar com o banco: ", error);
});

/*
//é como se fosse um try/catch = porem mais antigo
.then
.catch
try{
}catch*/