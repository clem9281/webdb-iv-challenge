const db = require("./dbConfig");

// dishes
const getDishes = () => {
  return db("dishes");
};

const addDish = dish => {
  return db("dishes").insert(dish);
};

const getDish = id => {
  return db("dishes").where({ id });
};

//recipes
const getRecipes = () => {
  return db("recipes");
};

const addRecipe = recipe => {
  return db("recipes").insert(recipe);
};

const getRecipe = id => {
  return db("recipes")
    .innerJoin("dishes", "recipes.dish_id", "dishes.id")
    .innerJoin(
      "ingredients_recipes",
      "recipes.id",
      "ingredients_recipes.recipe_id"
    )
    .innerJoin(
      "ingredients",
      "ingredients.id",
      "ingredients_recipes.ingredient_id"
    )
    .select({
      dish_name: "dishes.name",
      recipe_name: "recipes.name",
      ingredient_quantity: "ingredients_recipes.quantity",
      ingredient_name: "ingredients.name"
    })
    .where({ "recipes.id": id });
};

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  getRecipe
};
