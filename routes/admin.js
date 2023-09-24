const router = require('express').Router();
const path = require('path');
const rootDir = require('../util/path');
const adminController = require('../controllers/admin');

// /admin/add-product => GET request
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET request
router.get('/products', adminController.getProducts);

// /admin/add-product => POST request
router.post('/add-product', adminController.postAddProduct);

module.exports = router;