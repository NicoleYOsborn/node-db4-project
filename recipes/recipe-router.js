const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/recipes', (req, res)=>{
    Recipes.getRecipes()
    .then(recipes =>{
        res.status(200).json(recipes);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'Failed to get recipes'})
    })
})

router.get('/recipes/:id/shoppingList', (req, res)=>{
    const {id} = req.params;
    Recipes.getShoppingList(id)
    .then(list =>{
        res.status(200).json(list);
    })
    .catch(err =>{
        res.status(500).json({message: 'failed to get shopping list'})
    })
})

router.get('/recipes/:id/instructions', (req, res)=>{
    const {id} = req.params;
    Recipes.getInstructions(id)
    .then(list=>{
        res.status(200).json(list);
    })
    .catch(err =>{
        res.status(500).json({message: 'failed to get instructions'})
    })
})

router.get('/ingredients/:id/recipes', (req, res)=>{
    const {id} = req.params;
    Recipes.getRecipesByIngredient(id)
    .then(recipes=>{
        res.status(200).json(recipes);
    })
    .catch(err=>{
        res.status(500).json({message: 'failed to get recipes'})
    })
})

module.exports = router;