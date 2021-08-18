const {MongoClient} = require('mongodb');
const database = require('../src/database');

beforeAll(async () => {
  database.connect();
});

afterAll(async () => {
  database.close();
});
