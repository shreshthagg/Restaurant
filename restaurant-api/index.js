// Import essential libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const data = require('./data/menuData');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()).use(cors());

app.get('/api/v1/menu', (req, res) => res.json(data));

app.listen(port, () => console.log(`App listening on port ${port}`));
