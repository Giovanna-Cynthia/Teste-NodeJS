const { Router } = require("express");

const UserController = require("../controller/UserController");
const ProductController = require("../controller/ProductController");
const { validateUser, validateUserId } = require("../middlewares/validateUser");
const { validateProduct, validateProductId } = require("../middlewares/ValidateProduct");
const { validateCostumer, validateCostumertId } = require("../middlewares/ValidateCustomer");

const router = Router();

//Configurar as Rotas (CRUD)
//criar
// receber somente o objeto
router.post('/', validateUser, (req, res) => {
    UserController.create(req, res)
});

//buscar
//somente informação
router.get('/', validateUser, (req, res) => {
    UserController.getAll(req, res)
});

//:id = api/user/:id => /api/user/213 (Params) = Misto, passa o id, mais facil para se trabalhar
// /api/users?id=634 (Query) 
// {body : {id: "6436" } } (Body) = Criar e atualizar, passa o objeto. Mais seguro
//deletar
//somente o id
router.delete('/:id', validateUserId, (req, res) => {
    UserController.delete(req, res)
});

//atualizar
router.put('/:id', validateUserId, validateUser, (req, res) => {
    UserController.update(req, res)
});

router.get('/:id', validateUserId, (req, res) => {
    UserController.getOne(req, res)
});


/* Product */

router.post('/product/', validateProduct, (req, res) => {
    ProductController.create(req, res)
});

router.get('/product/', validateProduct, (req, res) => {
    ProductController.getAll(req, res)
});

router.delete('/product/:id', validateProductId, (req, res) => {
    ProductController.delete(req, res)
});

router.put('/product/:id', validateProduct, validateProductId, (req, res) => {
    ProductController.update(req, res)
});

router.get('product/:id', validateProductId, (req, res) => {
    ProductController.getOne(req, res)
});



/* Costumer */
router.post('/product/', validateCostumer, (req, res) => {
    ProductController.create(req, res)
});

router.get('/product/', validateCostumer, (req, res) => {
    ProductController.getAll(req, res)
});

router.delete('/product/:id', validateCostumertId, (req, res) => {
    ProductController.delete(req, res)
});

router.put('/product/:id', validateCostumer, validateCostumertId, (req, res) => {
    ProductController.update(req, res)
});

router.get('product/:id', validateCostumertId, (req, res) => {
    ProductController.getOne(req, res)
});



module.exports = router;