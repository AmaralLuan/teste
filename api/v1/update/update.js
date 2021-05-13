/*
import { app, db } from '../../../index';

// UPDATE PRODUCTS

app.put('/api/v1/update/updateProduct', (req, res) => {
    const product_id = req.params.id;
    const product_name = req.body.product_name;
    const product_value = req.body.product_value;
    const product_desc = req.body.product_desc;

    const updateProduct = "UPDATE products SET (product_name, product_value, product_desc) VALUES (?,?,?) WHERE product_id = ?"

    db.query(updateProduct, product_id [product_name, product_value, product_desc], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
    
})

*/