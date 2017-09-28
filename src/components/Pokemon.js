import React from 'react';
import {Link} from 'react-router-dom'

class Pokemon extends React.Component {
   
    render() {
        return (
            <Link to={this.props.pokemonId} >
            <div className="pokemon-wraper">
                <p className="pokemon-name">{this.props.name.slice(0,12)}</p>
                <img className="pokemon-img" alt="pokemon-small-sprite"
                  src={process.env.PUBLIC_URL + "/pokemon-sprites/" + this.props.pokemonId + ".png"}/>
            </div>
            </Link>
        )
    }
}

export default Pokemon;
