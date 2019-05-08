import {MongoClient, Db} from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'vehicleRent';
let db: Db;

function read(findParam, collectionName) {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      db = client.db(dbName);
      resolve(db.collection(collectionName).find(findParam).toArray());
      client.close();
    });
  });
}
export async function readAll(collectionName, data) {
  const resoult = await read(data, collectionName );
  console.log(resoult[0]);
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
    console.log(data)
    db.collection(collectionName).remove(data} );
    client.close();
  });
}
export async function rent(collectionName1, collectionName2, data) {
  console.log(data);
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbName);
    console.log(collectionName2)
    db.collection(collectionName1).updateOne({_id : data.clientID }, {$push: {rent : data.rentID}});
    db.collection(collectionName2).updateOne({_id : data.vehicleID}, {$set: {status: 'Rented'}});
    db.collection('rents').insertOne(data);
    client.close();
  });
}
export async function endRent(collectionName1, collectionName2, data) {
  console.log(data);
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbName);
    db.collection(collectionName1).updateOne({_id : data.clientID }, {$push: {rent : data.rentID}});
    db.collection(collectionName2).updateOne({_id : data.vehicleID}, {$set: {status: 'Rented'}});
    db.collection('rents').insertOne(data);
    client.close();
  });
}

