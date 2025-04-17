const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());






app.get('/', (req, res) => {
    res.send('get ready to play with flavors!')
  })
  
  app.listen(port, () => {
    console.log(`flavorhub is running on port ${port}`);
  })