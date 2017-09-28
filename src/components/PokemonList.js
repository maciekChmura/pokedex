import React from 'react';
import Search from "./Search";
import Container from "./Container";

class PokemonList extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: ''
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div className="pokemon-list">
                <Search
                    filterText={this.state.filterText}
                    onFilterTextInput={this.handleFilterTextInput}
                />
                <Container
                    filterText={this.state.filterText.toLowerCase()}
                    pokemons={this.props.data}
                />
            </div>
        )
    }
}

export default PokemonList;
