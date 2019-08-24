const Product = require('../models/product');

exports.getProducts = (req, res) => {
    const product = Product.fetchAll();
    console.log(product);
    res.render('shop', {
        prods: product,
        pageTitle: 'Shop',
        path: '/'
    });
}