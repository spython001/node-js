const router = require('express').Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const productController = require('../controllers/shop')


router.get('/', productController.getProducts);

router.get('/products');

router.get('/cart');

router.get('./checkout');


module.exports = router;