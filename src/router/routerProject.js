const { Router } = require("express");
const ProductController = require("../controller/ProductController");

const router = Router();


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

module.exports = router;
