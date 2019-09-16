import React from 'react';
import Layout from './components/Layout/Layout';
import NavigationBar from './components/NavigationBar';
import CourseMaterialList from './components/CourseMaterialList';
import CourseMaterial from './components/CourseMaterial';
import CourseDetails from './components/CourseDetails';
import SearchBox from './components/SearchBox';
import Title from './components/Title';
import './App.css';
import Description from './components/Description';
import Avatar from '../../tweeter/src/components/Avatar';

const App = () => {
	return (
		<div className="App">
			<Layout />
			<NavigationBar />
			<SearchBox />
			<CourseMaterialList />
			<CourseMaterial />
			<CourseDetails />
			<div>
				<Avatar />
				<Title />
				<Description />
			</div>
		</div>
	);
};

export default App;
