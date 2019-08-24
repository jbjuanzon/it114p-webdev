const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const errorController = require('./controllers/error');


app.use(bodyParser.urlencoded({extended: false}));
//To set our public files such as css and js
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use(adminRoutes);

app.use(errorController.get404);
  

app.listen(3000);