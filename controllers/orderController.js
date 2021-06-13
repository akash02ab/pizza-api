const orders = require("../models/orders");

async function getAllOrders() {
    try {
        let orderList = await orders.find().populate({
            path: "orders",
            populate: {
                path: "pizza",
                model: "Pizza",
            }
        });
        return orderList;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getAllOrders,
};
