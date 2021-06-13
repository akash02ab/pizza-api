const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orders: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'OrderItems'
    }
});

const OrderModel = mongoose.model('Orders', OrderSchema);

module.exports = OrderModel;