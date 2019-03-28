exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    {
      name: "cereal"
    },
    {
      name: "milk"
    },
    {
      name: "bread"
    },
    {
      name: "peanut butter"
    },
    {
      name: "jelly"
    },
    {
      name: "fluff"
    },
    {
      name: "pasta"
    },
    {
      name: "cheese"
    },
    {
      name: "water"
    }
  ]);
};
