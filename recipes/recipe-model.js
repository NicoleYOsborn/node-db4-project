const db = require('../data/db-config.js')

module.exports = {
   getRecipes,
   getShoppingList,
   getInstructions 
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(recipe_id){
    return db('ingredients as i')
    .join('recipe_ingredients as ri', 'ri.ingredient_id', 'i.id')
    .select('i.amount', 'i.ingredient_name')
    .where({recipe_id})
}

function getInstructions(recipe_id){
    return db('instructions as i')
    .join('recipes as r', 'i.recipe_id', 'r.id')
    .select('i.action')
    .where({recipe_id})
    .orderBy('i.step')
}