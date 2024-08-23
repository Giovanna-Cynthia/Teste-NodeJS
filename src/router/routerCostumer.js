const { Router } = require("express");
const CostumerController = require("../controller/CostumerController");

const router = Router();


/* Costumer */
router.post('/product/', validateCostumer, (req, res) => {
    CostumerController.create(req, res)
});

router.get('/product/', validateCostumer, (req, res) => {
    CostumerController.getAll(req, res)
});

router.delete('/product/:id', validateCostumertId, (req, res) => {
    CostumerController.delete(req, res)
});

router.put('/product/:id', validateCostumer, validateCostumertId, (req, res) => {
    CostumerController.update(req, res)
});

router.get('product/:id', validateCostumertId, (req, res) => {
    CostumerController.getOne(req, res)
});

module.exports = router;