const PizzaModel = require("../models/pizza");

async function addPizza(name, price, ingredients) {
    try {
        const pizza = new PizzaModel({
            name: name,
            price: price,
            ingredients: ingredients,
        });
        await pizza.save();
    } catch (err) {
        console.error(err);
    }
}

async function findPizza(query) {
    console.log(query)
    try {
        let pizzas = await PizzaModel.find({'ingredients': {$all: query['ingredients'].split(',')}});
        return pizzas;
    }
    catch(err) {
        console.log(err)
        return {'error': err};
    }
}

module.exports = {
    findPizza,
    addPizza
}