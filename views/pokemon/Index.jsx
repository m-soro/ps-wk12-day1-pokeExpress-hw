const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div className="container">
        <link rel="stylesheet" type="text/css" href="/pico.min.css" />
        <h1>The Pokemon Index Page</h1>

        {pokemons.map((pokemon, index) => {
          return (
            <ul>
              <li>
                {pokemon.name.replace(
                  pokemon.name[0],
                  pokemon.name[0].toUpperCase()
                )}
              </li>
              <li>
                <a href={`pokemon/${index}`}>About {pokemon.name}</a>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

module.exports = Index;
