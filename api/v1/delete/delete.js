/*

import { app, db } from '../../../index';

app.delete('/api/v1/update/deleteProduct/:product_id', (req, res) => {
    const product_id = req.params.product_id;
    const sqlDELETE = "DELETE FROM products WHERE product_id = ?"

    db.query(sqlDELETE, product_id, (error, result) =>  {
       if (error) console.log(error)
    })
})

*/