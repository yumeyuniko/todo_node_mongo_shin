require('dotenv').config();

const express = require('express');
const app = express();
const taskRoute = require('./routes/tasks');
const connectDB = require('./db/connect');

app.use(express.json());
app.use(express.static('./public'));

const PORT = 5005;
//Routing
app.use('/api/v1/tasks', taskRoute);

//DB connect
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log('サーバーが起動しました'));
  } catch (err) {
    console.log(err);
  }
};

start();
