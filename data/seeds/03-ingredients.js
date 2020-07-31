
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, amount: 1.75, ingredient_name: 'cups of water'},
        {id: 2, amount: 1, ingredient_name: 'cup or rice' },
        {id: 3, amount: 1, ingredient_name: 'ounce or popping corn'},
        {id: 4, amount: 1.75, ingredient_name: 'cups of water'},
        {id: 5, amount: 1, ingredient_name: 'dash of salt' },
        {id: 6, amount: 1, ingredient_name: 'potato'},
        {id: 7, amount: .5, ingredient_name: 'teaspoon of vegetable oil' },
      ]);
    });
};
