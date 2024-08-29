const { Router } = require("express");

const userRoutes = require('./routerUser');
const productRoutes = require('./routerProduct');
const costumerRoutes = require('./routerCostumer');
const UserController = require('../controller/UserController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = Router();

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/costumer', costumerRoutes);

// /api/login
router.post('/login', (req, res) => {
    UserController.login(req, res)
});

module.exports = router; 