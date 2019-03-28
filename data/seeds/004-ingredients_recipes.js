exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients_recipes").insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: "1 cup"
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: "1 cup"
    },
    {
      recipe_id: 2,
      ingredient_id: 1,
      quantity: "1.5 cups"
    },
    {
      recipe_id: 2,
      ingredient_id: 2,
      quantity: ".5 cups"
    },
    {
      recipe_id: 3,
      ingredient_id: 3,
      quantity: "2 slices"
    },
    {
      recipe_id: 3,
      ingredient_id: 4,
      quantity: "2 tablespoons"
    },
    {
      recipe_id: 3,
      ingredient_id: 5,
      quantity: "2 tablespoons"
    },
    {
      recipe_id: 4,
      ingredient_id: 3,
      quantity: "2 slices"
    },
    {
      recipe_id: 4,
      ingredient_id: 4,
      quantity: "3 tablespoons"
    },
    {
      recipe_id: 4,
      ingredient_id: 5,
      quantity: "6 teaspoons"
    },
    {
      recipe_id: 5,
      ingredient_id: 3,
      quantity: "2 slices"
    },
    {
      recipe_id: 5,
      ingredient_id: 4,
      quantity: "2 tablespoons"
    },
    {
      recipe_id: 5,
      ingredient_id: 6,
      quantity: "probably way too much"
    }
  ]);
};
