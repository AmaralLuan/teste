/*

import { app, db } from '../../../index';

// SELECT ALL USERS

app.get('/api/v1/read/getusers', (req, res) => {
    const selectAllUsers = "SELECT * FROM users"

    db.query(selectAllUsers, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// SELECT ALL FROM 1 USER ONLY

app.get('/api/v1/read/getSingleUser', (req, res) => {
    const user_id = req.params.id;
    const selectSingleUser = "SELECT * FROM users WHERE user_id = ?"

    db.query(selectSingleUser, user_id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// SELECT ALL CATEGORIES

app.get('/api/v1/read/getCategories', (req, res) => {
    const selectAllCategories = "SELECT * FROM category"

    db.query(selectAllCategories, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// SELECT ALL PRODUCTS

app.get('/api/v1/read/getProducts', (req, res) => {
    const selectAllProducts = "SELECT * FROM products"

    db.query(selectAllProducts, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// SELECT ALL FROM 1 PRODUCT ONLY

app.get('api/v1/read/getSingleProduct', (req, res) => {
    const product_id = req.params.id;
    const selectSingleProduct = "SELECT * FROM products WHERE product_id = ?"

    db.query(selectSingleProduct, product_id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

*/