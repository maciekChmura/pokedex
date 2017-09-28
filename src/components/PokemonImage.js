import React from 'react';

const PokemonImage = (props) => {
	const location = props.location.pathname;
	if (location !== '/') {
		const id = parseInt(props.location.pathname.slice(1), 10);
		return (
			<img className="left-pokemon" src={process.env.PUBLIC_URL + "/pokemon-sprites/" + id + ".png"} alt="pokemon sprite" />
		)
	}
	return (
		<img className="left-pokemon" src={process.env.PUBLIC_URL + "/pika.gif"} alt="pika!!" />
	);
};

export default PokemonImage;
