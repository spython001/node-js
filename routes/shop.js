const router = require('express').Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const productController = require('../controllers/products')


router.get('/', productController.getProducts);


module.exports = router;