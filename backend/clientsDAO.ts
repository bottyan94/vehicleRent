import {MongoClient, Db} from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbname = 'angular';
const collectionname = 'clients';
let db;

export async function readAll(data) {
  const resoult = await read(data);
  return resoult;
}
function read(data) {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      db = client.db(dbname);
      resolve(db.collection(collectionname).find(data).toArray());
      client.close();
    });
  });
}
export async function register(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbname);
    db.collection(collectionname).insertOne(data);
    client.close();
  });
}
export async function update(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbname);
    db.collection(collectionname).updateOne({ id : data.id }, {$set: data});
    client.close();
  });
}
export async function rent(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    db = client.db(dbname);
    db.collection(collectionname).updateOne({ id : data.clientsID }, {$push: {orders: data.orderID}});
    client.close();
  });
}

