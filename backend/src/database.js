const { MongoClient } = require('mongodb');

const database = module.exports;

const url = process.env.NODE_ENV == 'test' ? 'mongodb://root:1234@database/test' : 'mongodb://root:1234@database/';
console.log('URL : ', url);
database.connect = async function connect() {
  database.client = await MongoClient.connect(url, { useUnifiedTopology: true });
  console.log('Connect ', database.client);
};

database.close = async function close() {
  database.client.close();
  database.close();
}