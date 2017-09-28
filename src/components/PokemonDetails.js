import React from 'react';
import '../css/App.css';


class PokemonDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      id: 0,
    }
  }
  componentDidMount() {
    const id = parseInt(this.props.match.params.pokemonId, 10);
    fetch("https://pokeapi.co/api/v1/pokemon/" + id + "/").then(blob => blob.json()).then(blob => {
      this.setState({
        data: blob
      })
    });
    this.setState({ id: id });
  }

  componentDidUpdate(prevProps) {
    const id = parseInt(this.props.match.params.pokemonId, 10);
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      fetch("https://pokeapi.co/api/v1/pokemon/" + id + "/").then(blob => blob.json()).then(blob => {
        this.setState({
          data: blob
        })
      });
      this.setState({ id: id });
    }
  }

  render() {
    if (Object.keys(this.state.data).length !== 0) {
      let data = this.state.data;
      return (
        <div className="pokemon-list">
          <div className="right-list">
            <p className="space-up-down">name: <span className="float-right">{data.name.slice(0, 14)}</span></p>
            <p>attack: <span className="float-right"><progress value={data.attack} max="150" /></span></p>
            <p>defense: <span className="float-right"><progress value={data.defense} max="150" /></span></p>
            <p>exp: <span className="float-right"><progress value={data.exp} max="300" /></span></p>
            <p>hp: <span className="float-right"><progress value={data.hp} max="200" /></span></p>
            <p>speed: <span className="float-right"><progress value={data.speed} max="150" /></span></p>
            <p>moves:</p>
            {this.state.data.moves.slice(0, 3).map(move => {
              return (
                <li key={move.name}>{move.name}</li>
              )
            })}
            <p>types:</p>
            {this.state.data.types.slice(0, 2).map(type => {
              return (
                <li key={type.name}>{type.name}</li>
              )
            })}
          </div>
        </div>
      )
    }
    return <div>Loading...</div>;
  }
}

export default PokemonDetails;