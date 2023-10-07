const connectDB = require('./myDatabaseConnection');

// console.log(connectDB);

const getData = async () => {
    let data = await connectDB;
    data = await data.find().toArray();
    console.table(data);
}

const insertData = async (myData) => {
    let data = await connectDB;
    let insertUpd = await data.insertOne(myData);
    console.table(await insertUpd);
}

const deleteData = async (delData) => {
    let data = await connectDB;
    let delUpd = await data.deleteMany(delData);
    console.table(await delUpd);

}

const updateData = async (updData) => {
    let data = await connectDB;
    let updUpd = await data.updateMany(updData, { $set: { name: `${updData.name} Sharma` } });
    console.table(updUpd);
}

const data1 = { name: 'Adarsh', email: 'adarsh.pal@yopmail.com' };
const data2 = { name: 'Vishwanath', email: 'vishwanath.mourya@yopmail.com' };
const data3 = { name: 'Rupesh', email: 'rupesh.davle@yopmail.com' };
const data4 = { name: 'Ashwin', email: 'ashwin.yadav@yopmail.com' };
// insertData(data1);
// insertData(data2);
// insertData(data3);
// insertData(data4);

// deleteData({ name: 'Adarsh' });

// updateData({ name: 'Roshan' });

getData();

// connectDB.then((result) => {
//     result.find().toArray().then((items) => {
//         console.log(items);
//     })
// })

// async function getData() {
//     let myconn=await connectDB;
//     let findDatas = await myconn.find({}).toArray();
//     console.log(findDatas);
// }

// getData();

// async function connectAndGetData() {
//     try {
//         await client.connect();
//         const db = client.db(database);
//         const collection = db.collection('products');
//         const response = await collection.find({}).toArray();
//         console.log(response);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     } finally {
//         // Close the connection when done
//         await client.close();
//     }
// }

// console.log(connectAndGetData);
// const test=connectAndGetData;
// test();