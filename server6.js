const express = require('express');
const productsRouter = require('./modules/products/products.route');
const { dbConnect } = require('./config/dbConnect');
const { authRouter } = require('./modules/users/auth.route');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Welcome to my shop api. use /products to get all products');
});

app.use('/auth', authRouter);
app.use('/product', productsRouter);

async function start() {
  await dbConnect();

  app.listen(4000, (err) => {
    console.log('server listening on port: ', 4000);
  });
}

start();
