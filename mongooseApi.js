const express = require('express');
const app = express();
require('./mongooseConfig');
const ProductModel = require('./productSchema');


app.use(express.json());

app.get('/', async (req, resp) => {
    let getData = await ProductModel.find();
    resp.send(getData);
})

app.post('/insertDataByMongoose', async (req, resp) => {
    let addData = new ProductModel(req.body);
    let result = await addData.save();
    resp.send(result);
})

app.listen(2800);