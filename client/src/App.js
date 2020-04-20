import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	console.log(savedList);

	if(!savedList) {
		return <h2>Data Loading</h2>
	}

	return (
		<div>
			<Switch>
				<Route path='/movies/:id'>
					<Movie />
				</Route>

				<Route path='/'>
					<SavedList list={savedList} />
					<MovieList />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
