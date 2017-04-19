const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product');

mongoose.connect('mongodb://127.0.0.1:27017/dglist');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello, Express!');
});

app.get('/api/products', (request, response, next) => {
  Product.find({}, { __v:0 }, (error, products) => {
    if (error) next(error);
    response.json(products);
  });
});

app.use((error, request, response, next) => {
  response.status(500).json({ error: 'Internal Server Error' });
});

app.put('/api/products/:id/likes', (request, response) => {
  Product
    .findByIdAndUpdate(request.params.id, { $inc: { likes: 1 } })
    .exec((error) => {
      if (error) next(error);
      response.json({ success: true });
    });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});