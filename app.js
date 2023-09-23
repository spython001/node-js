const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path')

//USING 'PUG' TEMPLATE ENGINE
app.set('view engine', 'pug');
app.set('views', 'views');

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoute);

app.use('/', (req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, ()=> {
    console.log('Backend Server is running ...')
});