/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');
// app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

const windowRouter = require('./routes/windowRoute');
const userRouter = require('./routes/userRoute');

app.get('/', (req, res) => {
  res.status(200).send('server');
});
app.use('/window', windowRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(port, '번 작동중'));
