/*
import { app, db } from '../../../index';


// CREATE NEW USER


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
});

*/