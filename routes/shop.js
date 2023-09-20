const router = require('express').Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');


router.get('/', (req, res, next) => {
    console.log('shop.js',adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router;