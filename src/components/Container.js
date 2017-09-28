import React from "react";
import Pokemon from "./Pokemon"
import {
  List
} from "react-virtualized";


class Container extends React.Component { //product table

  render() {
    function rowRenderer({
      key, // Unique key within array of rows
      index, // Index of row within collection
      isScrolling, // The List is currently being scrolled
      isVisible, // This row is visible within the List (eg it is not an overscanned row)
      style // Style object to be applied to row (to position it)
    }) {
      return (
        <div
          key={key}
          style={style}
        >
          {list[index]}
        </div>
      )
    }

    let list = [];
    this.props.pokemons.pokemon.forEach((pokemon) => {
      if (!pokemon.name.startsWith(this.props.filterText)) {
        return;
      }
      list.push(<Pokemon
        name={pokemon.name}
        key={pokemon.name}
        pokemonId={pokemon.resource_uri.slice(15, -1)}
                />)
    });
    return (
      <div className="right-list">
        <List 
          width={240}
          height={297}
          rowCount={list.length}
          rowHeight={50}
          rowRenderer={rowRenderer}
        />
      </div>
    )
  }
}

export default Container;