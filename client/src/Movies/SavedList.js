import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SavedList = props => {

	const history = useHistory();

	const homeHandler = event => {
		history.push('/');
	}

	return (
		<div className="saved-list">
			<h3>Saved Movies:</h3>
			{props.list.map(movie => (
				<Link to={`/movies/${movie.id}`}>
					<span key={movie.id} className="saved-movie">{movie.title}</span>
				</Link>
			))}
			<div onClick={homeHandler} className="home-button">Home</div>
		</div>
	);
}

export default SavedList;
