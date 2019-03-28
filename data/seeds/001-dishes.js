exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("dishes").insert([
    {
      name: "Bowl of Cereal"
    },
    {
      name: "Peanut Butter and Jelly"
    },
    {
      name: "Pasta"
    }
  ]);
};
