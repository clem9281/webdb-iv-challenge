const db = require("./dbConfig");

const getDishes = () => {
  return db("dishes");
};

const addDish = dish => {
  return db("dishes").insert(dish);
};

const getDish = id => {
  return db("dishes").where({ id });
};

module.exports = {
  getDishes,
  addDish,
  getDish
};
