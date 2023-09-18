const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div>
        <h1>The Pokemon Index Page</h1>
      </div>
    );
  }
}

module.exports = Index;
