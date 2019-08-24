const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');


app.use(bodyParser.urlencoded({extended: false}));
//To set our public files such as css and js
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: '404 - Page Not Found',
        path: ''
    })
  });
  

app.listen(3000);