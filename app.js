const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);