const express = require("express");
const db = require("../data/dbHelpers");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const dishes = await db.getDishes();
      res.status(200).json(dishes);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Sorry, we couldn't get the dishes right now" });
    }
  })
  .post(async (req, res) => {
    const { name } = req.body;
    if (!name)
      return res.status(400).json({ error: "Your new dish must have a name" });
    try {
      const newDishId = await db.addDish(req.body);
      const newDish = await db.getDish(newDishId[0]).first();
      res.status(201).json(newDish);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Sorry, we couldn't create a new dish at this time" });
    }
  });

router.route("/:id").get(async (req, res) => {
  try {
    const dish = await db.getDish(req.params.id).first();
    res.status(400).json(dish);
  } catch (error) {
    res.status(500).json({ error: "Sorry, we can't get that dish right now" });
  }
});

module.exports = router;
