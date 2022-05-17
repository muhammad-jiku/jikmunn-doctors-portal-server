require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
