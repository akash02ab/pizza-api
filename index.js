const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const url = require('url');
const querystring = require('querystring');

const {findPizza} = require("./controllers/pizzaController");

mongoose.connect('mongodb://127.0.0.1:27017/pizzeria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(morgan('dev'));

app.get('/orders', (req, res) => {

});

app.get('/orders/:id', (req, res) => {

});

app.get('/pizzas', async (req, res) => {
    let parsedUrl = url.parse(req.url);
    let parsedQs = querystring.parse(parsedUrl.query);
    console.log(parsedQs)
    let response = await findPizza(parsedQs);
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