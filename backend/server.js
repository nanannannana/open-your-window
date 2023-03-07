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
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.set('view engine', 'ejs');
// app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

const windowRouter = require('./routes/windowRoute');
const userRouter = require('./routes/userRoute');
const mypageRouter = require('./routes/mypageRoute');

app.get('/', (req, res) => {
  res.status(200).send('server');
});
app.use('/window', windowRouter);
app.use('/user', userRouter);
app.use('/mypage', mypageRouter);

// DB 연결 성공 여부
const { sequelize } = require('./model/index');
// 다른 require문은 일단 생략
const ConnectDB = async () => {
  try {
    await sequelize
      .authenticate()
      .then(() => console.log('데이터베이스 연결 성공!'));
    await sequelize.sync().then(() => console.log('동기화 완료!'));
  } catch (error) {
    console.error('DB 연결 및 동기화 실패', error);
  }
};

// DB와 연결 및 동기화
ConnectDB();
app.listen(port, () => console.log(port, '번 작동중'));
