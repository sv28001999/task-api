const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://sv2800:Shivam%402800@atlascluster.keylavm.mongodb.net/';
const database = 'shopping';
const client = new MongoClient(url);

async function connectAndGetData() {
    try {
        await client.connect();
        const db = client.db(database);
        const collection = db.collection('products');
        return collection;
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;
    }
}

module.exports = connectAndGetData();