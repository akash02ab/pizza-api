const mongoose = require('mongoose');

const OrderItemsSchema = mongoose.Schema({
    pizza: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Pizza'
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
}, {timestamps: true});

const OrderItemsModel = mongoose.model('OrderItems', OrderItemsSchema);

module.exports = OrderItemsModel;