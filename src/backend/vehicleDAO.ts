/*
import {MongoClient, Db} from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'angular';
const collectionName = 'vehicle';
let db: Db;

function read(data) {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      console.log('connected to db');
      db = client.db(dbName);
      resolve(db.collection(collectionName).find(data).toArray());
      client.close();
    });
  });
}

export async function readAll(data) {
  const resoult = await read(data);
  return resoult;
}
export async function register(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbName);
    db.collection(collectionName).insertOne(data);
    client.close();
  });
}

export async function rent(data) {
  console.log('vehicle rented' + data.vehicleID);
  const client = new MongoClient(url);
  db = await client.connect(async () => {
    console.log('connected to db');
    db = client.db(dbName);
    db.collection(collectionName).updateOne({ index : 'data.vehicleID'}, {$set: {status: 'Rented'}});
    client.close();
  });
}
export async function update(data) {
  const client = new MongoClient(url);
  db = await client.connect(async () => {
    console.log('connected to db');
    db = client.db(dbName);
    db.collection(collectionName).updateOne({ index : data.index }, {$set: {status: 'Free'}});
    client.close();
  });
}

*/
