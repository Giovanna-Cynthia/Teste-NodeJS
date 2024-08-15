const { Router } = require("express");

const UserController = require("../controller/UserController");
const ProductController = require("../controller/ProductController");

const router = Router();

//Configurar as Rotas (CRUD)
//criar
router.post('/', (req, res) => {
    UserController.create(req, res)
});

//buscar
router.get('/', (req, res) => {
    UserController.getAll(req, res)
});

//:id = api/user/:id => /api/user/213 (Params) = Misto, passa o id, mais facil para se trabalhar
// /api/users?id=634 (Query) 
// {body : {id: "6436" } } (Body) = Criar e atualizar, passa o objeto. Mais seguro
//deletar
router.delete('/:id', (req, res) => {
    UserController.delete(req, res)
});

//atualizar
router.put('/:id', (req, res) => {
    UserController.update(req, res)
});

router.get('/:id', (req, res) => {
    UserController.getOne(req, res)
});


router.post('/product/', (req, res) => {
    ProductController.create(req, res)
});

router.get('/product/', (req, res) => {
    ProductController.getAll(req, res)
});

router.delete('/product/:id', (req, res) => {
    ProductController.delete(req, res)
});

router.put('/product/:id', (req, res) => {
    ProductController.update(req, res)
});

router.get('product/:id', (req, res) => {
    ProductController.getOne(req, res)
});


module.exports = router;