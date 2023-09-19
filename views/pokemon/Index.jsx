import React from "react";

export default function Index({ pokemons }) {
  return (
    <div className="container">
      <link rel="stylesheet" type="text/css" href="/pico.min.css" />
      <link rel="stylesheet" type="text/css" href="/styles.css" />
      <h1>The Pokemon Index Page</h1>
      {pokemons.map((pokemon, index) => {
        return (
          <ul>
            <li>
              <a
                href={`pokemon/${index}`}
                data-tooltip={`about ${pokemon.name}`}
              >
                {pokemon.name.replace(
                  pokemon.name[0],
                  pokemon.name[0].toUpperCase()
                )}
              </a>
            </li>
          </ul>
        );
      })}
      Find Pokemon to add <a href="https://www.pokemon.com/us/pokedex">here</a>
      <br />
      <a href="/pokemon/new" role="button" className="outline">
        create pokemon
      </a>
    </div>
  );
}
