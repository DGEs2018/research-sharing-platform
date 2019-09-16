import React from 'react';
import Layout from './components/Layout/Layout';
import NavigationBar from './components/NavigationBar';
import CourseMaterialList from './components/CourseMaterialList';
import CourseMaterial from './components/CourseMaterial';
import CourseDetails from './components/CourseDetails';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Layout />
			<NavigationBar />
			<CourseMaterialList />
			<CourseMaterial />
			<CourseDetails />
		</div>
	);
};

export default App;
