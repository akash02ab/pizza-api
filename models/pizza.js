const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    name: {
        type: String, 
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    }
});

const PizzaModel = mongoose.model('Pizza', PizzaSchema);

module.exports = PizzaModel;