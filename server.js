const express = require("express");
const app = express();
const port = 3000;
const jsxEngine = require("jsx-view-engine");

// Prokemon data
const pokemons = require("./models/pokemons.js");

// Add View Template
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Pokemon Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App");
});

app.get("/pokemon/", (req, res) => {
  res.send(pokemons);
  // 1st argument is the Index.jsx, second is the pokemons data passed in as props
  //   res.render("pokemon/Index", { pokemons: pokemons });
});

app.listen(port, () => {
  console.log("Listening to port 3000");
});
