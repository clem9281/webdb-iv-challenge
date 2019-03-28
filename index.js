const express = require("express");
const helmet = require("helmet");
const dishes = require("./routers/dishes");
const recipes = require("./routers/recipes");

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => res.send("<h1>WebDB IV</h1>"));
app.use("/api/dishes", dishes);
app.use("/api/recipes", recipes);

const port = process.env.PORT || 6500;
app.listen(port, console.log(`Server running on ${port}`));
