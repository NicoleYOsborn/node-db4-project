
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'popcorn'},
        {id: 2, title: 'rice'},
        {id: 3, title: 'baked potato'}
      ]);
    });
};
