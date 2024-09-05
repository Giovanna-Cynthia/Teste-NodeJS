const { Router } = require("express");

const userRoutes = require('./routerUser');
const productRoutes = require('./routerProduct');
const costumerRoutes = require('./routerCostumer');
const UserController = require('../controller/UserController');
const authenticateToken = require('../middlewares/authenticateToken');

const uploadRoutes = require('./routerUpload');

const router = Router();

// /api/images/upload
router.use('/image', uploadRoutes);

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/costumer', costumerRoutes);

// /api/login
router.post('/login', (req, res) => {
    UserController.login(req, res)
});

module.exports = router; 