const router = require('express').Router();
const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/shop');

// /admin/add-product => GET request
router.get('/add-product', productsController.getAddProduct);

// /admin/products => GET request
router.get('/products');

// /admin/add-product => POST request
router.post('/add-product', productsController.postAddProduct);

module.exports = router;