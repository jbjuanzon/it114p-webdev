const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: 'add-product'
    });
}

exports.addProduct = (req, res, next) => {
    console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  }