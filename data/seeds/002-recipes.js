exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    {
      name: "Cereal First",
      dish_id: 1,
      instructions:
        "Put the cereal in the bowl first: then pour the milk over it."
    },
    {
      name: "Milk First",
      dish_id: 1,
      instructions:
        "Put the milk in the bowl first: then pour the cereal into it you animal."
    },
    {
      name: "Cut square",
      dish_id: 2,
      instructions: "Make a pb&j. Cut the sandwich lengthwise down the middle."
    },
    {
      name: "Cut triangle",
      dish_id: 2,
      instructions: "Make a pb&j. Cut the sandwich diagonally."
    },
    {
      name: "Fluffernutter",
      dish_id: 2,
      instructions:
        "Make as a usualy pb&j, but supplement the jelly for marshmallow fluff!"
    },
    {
      name: "Al Dente",
      dish_id: 3,
      instructions: "Boil the water. Throw pasta in, take back out. Serve raw."
    },
    {
      name: "Mac and Cheese",
      dish_id: 3,
      instructions:
        "Boil water, cook pasta. Drain, dump a bunch of cheese on that."
    }
  ]);
};
