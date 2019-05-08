import {MongoClient, Db} from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'angular';
const collectionName = 'clients';
let db: Db;

export async function rent(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbName);
    db.collection(collectionName).updateOne({ id : data.clientID }, {$set: data});
    client.close();
  });
}
