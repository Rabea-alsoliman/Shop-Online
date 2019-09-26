const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/online-shop'

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: String,
    description: String,
    category: String
})

const Product = mongoose.model('product', productSchema)

exports.getAllProducts = () => {

    // connect to db
    // get products
    // disconnect

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Product.find({})
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => reject(err))
    })
}

exports.getProductsByCategory = (category) => {

    // create fillter to get category just from database

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Product.find({category: category})
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => reject(err))
    })
}

exports.getProductsById = id => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                return Product.findById(id)
            })
        .then(products => {
            mongoose.disconnect()
            resolve(products)
            })
        .catch(err => reject(err))
    })
}

exports.getFirstProduct = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                return Product.findOne({})
            })
        .then(products => {
            mongoose.disconnect()
            resolve(products)
            })
        .catch(err => { 
            mongoose.disconnect()
            reject(err)     
        })
    })
}

exports.addNewProduct = data => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                let newProduct = new Product(data);
                return newProduct.save();
            })
            .then(products => {
                mongoose.disconnect()
                resolve(products);
                })
            .catch(err => { 
                mongoose.disconnect()
                reject(err);
            });
    });
};
