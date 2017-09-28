import React from "react";
import "../css/App.css";
import { Route, Switch } from "react-router-dom";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import PokemonImage from "./PokemonImage";
import Controls from "./Controls";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v1/pokedex/1/`).then(blob => blob.json()).then(blob => {
      this.setState({
        data: blob
      })
    })
  }

  render() {
    if (Object.keys(this.state.data).length !== 0) {
      return (
        <div className="wrapper">
          <div className="left-panel">
            <Route path="/" component={PokemonImage} />
            <Route path="/" component={Controls} />
          </div>

          <div className="right-panel">
            <Switch>
              <Route path="/:pokemonId" component={PokemonDetails} />
              <Route path="/" render={() => <PokemonList data={this.state.data} />} />
            </Switch>
          </div>
        </div>
      )
    }
    return null;
  }
}

export default App;