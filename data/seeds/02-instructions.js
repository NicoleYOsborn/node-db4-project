
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step: 1, action: 'pour oil in silicone popcorn popper'},
        {id: 2, recipe_id: 1, step: 2, action:'add popcorn and salt' },
        {id: 3, recipe_id: 1, step: 3, action: 'microwave on "popcorn" setting until done'},
        {id: 4, recipe_id: 2, step: 1, action: 'bring water to a boil'},
        {id: 5, recipe_id: 2, step: 2, action:'add rice and turn heat to low' },
        {id: 6, recipe_id: 2, step: 3, action: 'let simmer for 20 minutes or until all water is absorbed'}
        {id: 7, recipe_id: 3, step: 1, action: 'wash potato well with scrub brush'},
        {id: 8, recipe_id: 3, step: 2, action:'microwave on high for 5 minutes, turning once during cooking' },
        {id: 9, recipe_id: 3, step: 3, action: 'serve with butter, salt and other desired toppings'}
      ]);
    });
};
