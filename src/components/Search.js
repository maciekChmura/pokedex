import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    
    return (
      <div className="search">
        <form >
          <input className="search-input"
            type="text"
            placeholder="Search for Pokemon"
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />
        </form>
        
      </div>
    )
  }
}

export default Search;