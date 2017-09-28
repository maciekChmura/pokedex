import React from 'react';
import { Link } from 'react-router-dom';

const Controls = (props) => {
	const randomId = (Math.ceil(Math.random() * 717)).toString();
	const location = props.location.pathname;
	const id = parseInt(location.slice(1), 10);
	let prevId = (id - 1).toString();
	let nextId = (id + 1).toString();
	if (location !== '/' && id === 1) {
		return (
			<div className="buttons">
				<Link to="/">
					<button className="button" >back</button>
				</Link>
				<Link to={prevId}>
					<button className="button" disabled>prev</button>
				</Link>
				<Link to={nextId}>
					<button className="button" >next</button>
				</Link>
				<Link to={randomId}>
					<button className="button button-random">random</button>
				</Link>
			</div>
		)
	} else if (location !== '/' && id === 717) {
		return (
			<div className="buttons">
				<Link to="/">
					<button className="button" >back</button>
				</Link>
				<Link to={prevId}>
					<button className="button" >prev</button>
				</Link>
				<Link to={nextId}>
					<button className="button" disabled>next</button>
				</Link>
				<Link to={randomId}>
					<button className="button button-random">random</button>
				</Link>
			</div>
		)
	} else if (location !== '/') {
		return (
			<div className="buttons">
				<Link to="/">
					<button className="button" >back</button>
				</Link>
				<Link to={prevId}>
					<button className="button" >prev</button>
				</Link>
				<Link to={nextId}>
					<button className="button" >next</button>
				</Link>
				<Link to={randomId}>
					<button className="button button-random">random</button>
				</Link>
			</div>
		)
	}
	return (
		<div className="buttons">
			<button className="button" disabled>back</button>
			<button className="button" disabled>prev</button>
			<button className="button" disabled>next</button>
			<Link to={randomId}>
				<button className="button button-random">random</button>
			</Link>
		</div>
	)
};

export default Controls;
