const { Router } = require("express");

const userRoutes = require('./routerUser');
const productRoutes = require('./routerProduct');
const costumerRoutes = require('./routerCostumer');

const router = Router();

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/costumer', costumerRoutes);

module.exports = router;