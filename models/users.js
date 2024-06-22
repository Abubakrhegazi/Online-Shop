const mongoose = require('mongoose');
const { isEmail } = require('validator');
const product = require('../models/product');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,

  },
  items: [
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        qty: { type: Number, required: true, default: 1 }
    }
  ]
},
{ timestamps: true });
  


// userSchema.methods.addToCart = function (product) {
//   const cart = this.cart;
//   const existingProductIndex = cart.items.findIndex(item => item.productId.toString() === product._id.toString());

//   if (existingProductIndex >= 0) {
//       // Product exists in the cart, update the quantity
//       cart.items[existingProductIndex].qty += 1;
//   } else {
//       // Product does not exist in the cart, add as a new item
//       cart.items.push({ productId: product._id, qty: 1 });
//   }

//   // Update the total price
//   cart.totalPrice = cart.items.reduce((total, item) => {
//       return total + (item.qty * product.price);
//   }, 0);

//   // Save the updated user document
//   return this.save();
// };


const User = mongoose.model('User', userSchema);
module.exports = User;
