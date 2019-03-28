const db = require("./dbConfig");

const getDishes = () => {
  return db("dishes");
};

module.exports = {
  getDishes
};
