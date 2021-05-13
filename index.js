const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');


// EXPRESS FUNCTIONS

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());



app.use(cors());


// MYSQL CONNECTION 

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste'
})







//---------------------ROUTES---------------------//


//         READ          //


// GET ALL USERS

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

// GET SINGLE USER

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


//           POST         //

app.post('/api/v1/create/createUser', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    db.query(
        "INSERT INTO users (name, email, created_at) VALUES (?,?,?)",
        [name, email, new Date()],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send({result})
            }
        }
    )
})

// CREATE NEW CATEGORY

app.post('/api/v1/create/createCategory', (req, res) => {
    const category_name = req.body.category_name;
    const category_desc = req.body.category_desc;

    db.query (
        "INSERT INTO category (category_name, category_desc) VALUES (?,?)",
        [category_name, category_desc],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send({result})
            }
        }
    )
})

// CREATE NEW PRODUCT 

app.post('/api/v1/create/createProduct', (req, res) => {
    const product_name = req.body.product_name;
    const product_value = req.body.product_value;
    const product_desc = req.body.product_desc;

    db.query(
        "INSERT INTO products (product_name, product_value, product_desc) VALUES (?,?,?)",
        [product_name, product_value, product_desc],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send({result})
            }
        }
    )
})

//       PUT       //

// UPDATE PRODUCT

app.put('/api/v1/update/updateProduct/:product_id', (req, res) => {
    const product_id = req.params.id;
    const product_name = req.body.product_name;
    const product_value = req.body.product_value;
    const product_desc = req.body.product_desc;

    const updateProduct = "UPDATE products SET (product_name, product_value, product_desc) VALUES (?,?,?) WHERE product_id = ?"

    db.query(updateProduct, product_id, [product_name, product_value, product_desc], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
    
})


//    DELETE    //

app.delete('/api/v1/update/deleteProduct/:product_id', (req, res) => {
    const product_id = req.params.product_id;
    const sqlDELETE = "DELETE FROM products WHERE product_id = ?"

    db.query(sqlDELETE, product_id, (error, result) =>  {
       if (error) console.log(error)
    })
})


// LISTENING PORT

app.listen(3001, () => {
    console.log('running on port 3001');
})


module.exports = { app, db };