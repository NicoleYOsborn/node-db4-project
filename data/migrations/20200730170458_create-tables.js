
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl =>{
      tbl.increments();
      tbl.string('title', 128).notNullable();
  })
  .createTable('instructions', tbl=>{
      tbl.increments();
      tbl.integer('step');
      tbl.string('action', 400);
      tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
  })
  .createTable('ingredients', tbl =>{
      tbl.increments();
      tbl.float('amount');
      tbl.string('ingredient_name', 128).notNullable();
  })
  .createTable('recipe_ingredients', tbl =>{
      tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('ingredient_id').unsigned().notNullable().references('ingredients.id').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes');
};
