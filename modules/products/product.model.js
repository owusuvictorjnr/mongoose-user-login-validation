const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price can not be less than zero'],
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, 'Quantity can not be less than zero'],
  },
});

module.exports = model('Product', productSchema);
