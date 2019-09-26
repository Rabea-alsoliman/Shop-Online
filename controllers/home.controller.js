const productsModel = require('../models/products.model')

exports.getHome = (req, res, next) => {
    //get products from database   
    //render index.ejs
    //--------------------
    // get category
    // if category && category !== all 
    //      filter
    // else
    //      render all

    let category = req.query.category
    let validCategories = ['clothes', 'phones', 'computers']
    let productsPromise
    if (category && validCategories.includes(category)) 
        productsPromise = productsModel.getProductsByCategory(category) 
    else productsPromise = productsModel.getAllProducts()
    productsPromise.then(products => {
        res.render('index', {
            products: products,
            isUser: req.session.userId,
            isAdmin: req.session.isAdmin,
            validationError: req.flash('validationErrors')[0],
            pageTitle: 'الصفحه الرئيسيه'
        });
    });
};
