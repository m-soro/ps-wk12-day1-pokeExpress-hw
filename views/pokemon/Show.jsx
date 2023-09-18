const React = require("react");

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="container">
        <link rel="stylesheet" type="text/css" href="/pico.min.css" />
        <h1>Gotta Catch 'Em All</h1>
        <article>
          <header>
            <h2>
              {pokemon.name.replace(
                pokemon.name[0],
                pokemon.name[0].toUpperCase()
              )}
            </h2>
          </header>
          <body>
            <figure>
              <img src={`${pokemon.img}.jpg`} alt="" className="container" />
            </figure>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              quis illum optio obcaecati. Similique accusamus consectetur
              perspiciatis rerum culpa totam, molestias sequi, quibusdam
              inventore dolore architecto alias facere iusto. Aspernatur!
            </p>
          </body>
          <footer>
            <a href="/">back</a>
          </footer>
        </article>
      </div>
    );
  }
}

module.exports = Show;
