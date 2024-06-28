const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Food  = mongoose.model('food', foodSchema);
module.exports = Food;