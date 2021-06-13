const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const {findPizza} = require("./controllers/pizzaController");
const {getOrderItems} = require("./controllers/orderItemsController");
const {getAllOrders} = require("./controllers/orderController");

mongoose.connect('mongodb://127.0.0.1:27017/pizzeria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(morgan('dev'));

app.get('/orders', async (req, res) => {
    let response = await getAllOrders();
    res.json(response);
});

app.get('/orders/:id', async (req, res) => {
    let response = await getOrderItems(req.params.id);
    res.json(response);
});

app.get('/pizzas', async (req, res) => {
    let response = await findPizza(req.query);
    res.json(response);
});

app.all(/.*/, (req, res) => {
    res.statusCode = 404;
    res.json({error: "Page not Found"});
});

const PORT = 8800;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});