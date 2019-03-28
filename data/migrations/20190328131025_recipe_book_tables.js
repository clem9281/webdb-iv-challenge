exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.string("instructions", 256).notNullable();

      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("ingredients_recipes", tbl => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.string("quantity", 128).notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("dishes")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("ingredients_recipes");
};
