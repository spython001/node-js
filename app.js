const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path')
const expressHbs = require('express-handlebars');
const errorController = require('./controllers/error');

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

app.use('/admin', adminRoutes);
app.use(shopRoute);

app.use('/', errorController.get404Page);

app.listen(3000, ()=> {
    console.log('Backend Server is running ...')
});