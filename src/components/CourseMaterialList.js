import React, { useEffect, useState } from 'react';
import CourseMaterial from './CourseMaterial';
// import SearchBox from './SearchBox';

const CourseMaterialList = ({ title, id, url }) => {
	const [ courseMaterials, setCourseMaterials ] = useState([]);

	useEffect(() => {
		getData();
		console.log('checking to see data fetching');
	}, []);

	const getData = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/photos');
		const data = await response.json();
		setCourseMaterials(data);
		console.log(data);
	};

	return (
		<div className="course-materials">
			<CourseMaterial />
			{courseMaterials.map((el) => <CourseMaterial key={id} title={title} id={id} image={url} />)}
		</div>
	);
};

export default CourseMaterialList;

const data = {
	title: 'wes bos react',
	descriptions: 'loremwefnd;lwekjrsdgfokjne'
};
