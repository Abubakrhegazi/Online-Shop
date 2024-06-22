const mongoose = require('mongoose');

const likedItemSchema = new mongoose.Schema({
    productId: String,
    userId: String, 
});

const LikedItem = mongoose.model('LikedItem', likedItemSchema);

module.exports = LikedItem;
