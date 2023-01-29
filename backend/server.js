/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('server');
});
app.post('/uploadConfirm', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => console.log(port, '번 작동중'));
