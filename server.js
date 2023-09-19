const express = require("express");
const app = express();
const port = 3000;
const jsxEngine = require("jsx-view-engine");

// Prokemon data
const pokemons = require("./models/pokemons.js");

app.use(express.static("public"));

// Add View Template
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// view body of a post request
//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));

// MIDDLEWARE
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

// INDUCES

// Pokemon Routes
app.get("/", (req, res) => {
  // res.send("Welcome to the Pokemon App");
  res.render("pokemon/Home");
});

// INDEX
app.get("/pokemon", (req, res) => {
  // check to see if pokemon data is connected to app
  // res.send(pokemons);
  // 1st argument is the Index.jsx, second is the pokemons data passed in as props
  res.render("pokemon/Index", { pokemons: pokemons });
});

// NEW - is get, this holds the form
app.get("/pokemon/new", (req, res) => {
  res.render("pokemon/New");
});

// DELETE

// UPDATE

// CREATE
app.post("/pokemon", (req, res) => {
  // console.log("You added: ", req.body.name, req.body.img);
  pokemons.push(req.body);
  // console.log(pokemons);
  res.redirect("/pokemon");
});

// EDIT

// SHOW
app.get("/pokemon/:id", (req, res) => {
  res.render("pokemon/Show", {
    pokemon: pokemons[req.params.id],
  });
});

app.listen(port, () => {
  console.log("Listening to port 3000");
});

// http://localhost:3000/pokemon/new
// Caterpie
// https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png
