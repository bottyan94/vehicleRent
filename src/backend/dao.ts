import {MongoClient, Db} from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'angular';
let db: Db;

function read(collectionName, data) {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      db = client.db(dbName);
      resolve(db.collection(collectionName).find(data).toArray());
      client.close();
    });
  });
}
export async function readAll(collectionName, data) {
  const resoult = await read(collectionName, data);
  return resoult;
}
export async function register(collectionName, data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbName);
    db.collection(collectionName).insertOne(data);
    client.close();
  });
}
export async function deleteClients(collectionName, data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbName);
    db.collection(collectionName).remove( { id : data.id } );
    client.close();
  });
}
export async function rent(collectionName1, collectionName2, data) {
  console.log(data);
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbName);
    db.collection(collectionName1).updateOne({ id : data.clientID }, {$push: {rents : data.orderID}});
    db.collection(collectionName2).updateOne({ id : data.vehicleID}, {$set: {status: 'Rented'}});
    db.collection('orders').insertOne(data);
    client.close();
  });
}
export async function endRent(collectionName1, collectionName2, data) {
  console.log(data);
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbName);
    db.collection(collectionName1).updateOne({ id : data.clientID }, {$pull: {rents : data.orderID}});
    db.collection(collectionName2).updateOne({ id : data.vehicleID}, {$set: {status: 'Free'}});
    db.collection('orders').updateOne({ id : data.orderID}, {$set: {status: 'Done'}});
    client.close();
  });
}
