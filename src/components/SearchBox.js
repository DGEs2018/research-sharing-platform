import React, { useState } from 'react';

const SearchBox = (props) => {
	const [ find, setFind ] = useState('');

	const updateFind = (event) => {
		setFind(event.target.value);
	};

	return (
		<form className="search-form">
			<label htmlFor="search-bar" />
			<input
				id="search-input"
				type="text"
				placeholder="Search"
				name="topic-search"
				value={find}
				onChange={updateFind}
			/>
			<button className="search-button" type="submit">
				Search
			</button>
		</form>
	);
};

export default SearchBox;
