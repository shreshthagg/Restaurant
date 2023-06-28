// Import essential libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const data = require('./data/menuData');
const User = require('./model'); // contains functions for mongodb

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()).use(cors());

app.get('/api/v1/menu', (req, res) => res.json(data));

// connecting to mongodb
const uri = `mongodb+srv://testUser:${process.env.TEST_PASSWORD}@cluster0.276hr9z.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri).catch((err) => console.log(err.message));

// store user in mongodb
app.post('/api/v1/signup', async (req, res) => {
  const user = req.body;
  try {
    await User.signup(user);
    res.status(200).json('success');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));
