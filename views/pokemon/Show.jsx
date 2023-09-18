const React = require("react");

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <article>
          <header>
            <h1>
              {pokemon.name.replace(
                pokemon.name[0],
                pokemon.name[0].toUpperCase()
              )}
            </h1>
          </header>
          <body>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              quis illum optio obcaecati. Similique accusamus consectetur
              perspiciatis rerum culpa totam, molestias sequi, quibusdam
              inventore dolore architecto alias facere iusto. Aspernatur!
            </p>
          </body>
        </article>
      </div>
    );
  }
}

module.exports = Show;
