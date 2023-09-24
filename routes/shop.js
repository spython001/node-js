const router = require('express').Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const shopController = require('../controllers/shop')


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('./checkout', shopController.getCheckout);


module.exports = router;