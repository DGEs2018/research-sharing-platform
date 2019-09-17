import React from 'react';

const CourseMaterial = ({ title, id, url }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{id}</p>
			<img src={url} alt="" />
		</div>
	);
};

export default CourseMaterial;
