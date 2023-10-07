const { MongoClient } = require('mongodb');
const url = "mongodb+srv://sv2800:Shivam%402800@atlascluster.keylavm.mongodb.net/";
const database = "shopping";
const client = new MongoClient(url);

async function connectDataBase() {
    await client.connect();
    const db = client.db(database);
    const dbCollection = await db.collection('products');
    const myData = await dbCollection.find({ name: 'Rupesh Yadav' }).toArray();
    console.table(myData);
}

connectDataBase();