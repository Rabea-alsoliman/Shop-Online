const productsModel = require('../models/products.model')

exports.getProduct = (req, res, next) => {
    productsModel.getFirstProduct().then((product) => {
        res.render('product', {
            product: product,
            isUser: req.session.userId,
            isAdmin: req.session.isAdmin,
            pageTitle: 'تفاصيل المنتج'
            
        })
    })
}

exports.getProductById = (req, res, next) => {
    // get id
    // get product
    // render
    
    let id = req.params.id 
    productsModel.getProductsById(id).then((product) => {
        res.render('product', {
            product: product,
            isUser: req.session.userId,
            isAdmin: req.session.isAdmin,
            pageTitle: 'تفاصيل المنتح'
        })
    })
}