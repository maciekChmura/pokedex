import React from 'react';
import '../css/App.css';


class PokemonDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      id: 0,
      skillsy: ['turbo', 'szybkie', 'kopniaki']
    }
  }
  componentDidMount() {
    const id = parseInt(this.props.match.params.pokemonId, 10);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(blob => blob.json())
      .then(blob => {
        this.setState({
          data: blob
        })
      });
    this.setState({ id: id });
  }

  componentDidUpdate(prevProps) {
    const id = parseInt(this.props.match.params.pokemonId, 10);
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(blob => blob.json())
        .then(blob => {
          this.setState({
            data: blob
          })
        });
      this.setState({ id: id });
    }
  }

  render() {
    console.log(Object.keys(this.state.data).length);
    if (Object.keys(this.state.data).length !== 0) {
      let data = this.state.data;
      return (
        <div className="pokemon-list">
          <div className="right-list">
            <p className="space-up-down">name: <span className="float-right">{data.name.slice(0, 14)}</span></p>
            <p>attack: <span className="float-right"><progress value={data.stats[4].base_stat} max="150" /></span></p>
            <p>defense: <span className="float-right"><progress value={data.stats[3].base_stat} max="150" /></span></p>
            <p>exp: <span className="float-right"><progress value={data.base_experience} max="300" /></span></p>
            <p>hp: <span className="float-right"><progress value={data.stats[5].base_stat} max="200" /></span></p>
            <p>speed: <span className="float-right"><progress value={data.stats[0].base_stat} max="150" /></span></p>
            <p>moves:</p>
            {this.state.data.moves.slice(0, 3).map(move => {
              return (
                <li>{move.move.name}</li>
              )
            })}
            <p>types:</p>
            {this.state.data.types.slice(0, 2).map(type => {
              return (
                <li>{type.type.name}</li>
              )
            })}
          </div>
        </div>
      )
    }
    return <p className="loading" >loading...</p>;
  }
}

export default PokemonDetails;