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

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};
