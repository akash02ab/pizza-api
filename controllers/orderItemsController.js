const mongoose = require("mongoose");
const OrderItems = require("../models/orderItems");

async function getOrderItems(id) {
    try {
        let orders = await OrderItems.find({ 'pizza': id }).populate('pizza');
        return orders;
    } catch (err) {
        return err;
    }
}

async function addItem() {
    try {
        let newOrder = new OrderItems({
            pizza: mongoose.Types.ObjectId('60c4b5763da2f91c6f159676'),
            quantity: 3
        })
        await newOrder.save();
    }catch(err) {
        console.log(err);
    }    
}

module.exports = {
    getOrderItems,
    addItem
}
