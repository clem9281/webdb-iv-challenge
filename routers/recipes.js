const express = require("express");
const db = require("../data/dbHelpers");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const recipes = await db.getRecipes();
      res.status(200).json(recipes);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Sorry, we couldn't get the recipes at this time" });
    }
  })
  .post(async (req, res) => {
    const { name, dish_id, instructions } = req.body;
    if (!name || !dish_id || !instructions)
      return res.status(404).json({
        error: "A new recipe must have a name, dish_id and instructions"
      });
    try {
      const newRecipeId = await db.addRecipe(req.body);
      res.status(201).json(newRecipeId);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Sorry, we couldn't add a new recipe at this time" });
    }
  });

module.exports = router;
