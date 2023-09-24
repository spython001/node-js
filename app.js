const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path')
const expressHbs = require('express-handlebars');

//USING 'PUG' TEMPLATE ENGINE
app.set('view engine', 'pug');
app.set('views', 'views');

//USING 'HANDLEBARS TEMPLATE ENGINE
app.engine('.hbs', expressHbs.engine({
    extname: ".hbs",
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layouts'
  }));
app.set('view engine', 'hbs');
app.set('views', 'views');

//USING 'EJS' TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoute);

app.use('/', (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000, ()=> {
    console.log('Backend Server is running ...')
});