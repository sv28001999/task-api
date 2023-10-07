const dbConnect = require('./myDatabaseConnection');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let db = await dbConnect;
    resp.send(await db.find().toArray());
});

app.post('/insertData', async (req, resp) => {
    let db = await dbConnect;
    let insertData = await db.insertOne(req.body);
    console.log(insertData);
    resp.send(await db.find().toArray());
});

app.delete('/deleteData', async (req, resp) => {
    let db = await dbConnect;
    let deletedData = await db.deleteOne(req.body);
    console.log(deletedData);
    resp.send(await db.find().toArray());
})

app.listen(2800);