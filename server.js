const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());

const mongoUrl = 'mongodb://mongo:27017';
const dbName = 'steamdb';

let db;

MongoClient.connect(mongoUrl)
  .then(client => {
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  })
  .catch(console.error);

app.get('/', (req, res) => {
  res.send('Hello from Steam API!');
});

// Пример: вземи всички потребители (колекция users)
app.get('/users', async (req, res) => {
  try {
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
