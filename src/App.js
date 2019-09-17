import React from 'react';
import Layout from './components/Layout/Layout';
import NavigationBar from './components/NavigationBar';
import CourseMaterialList from './components/CourseMaterialList';
import SearchBox from './components/SearchBox';
import Main from './static-ui-layout/Main';
import Header from './static-ui-layout/Header';
import Footer from './static-ui-layout/Footer';

/* import CourseMaterial from './components/CourseMaterial';
import CourseDetails from './components/CourseDetails';
import Title from './components/Title'; */
import './components/ContainerPage.css';
import './App.css';
// import Description from './components/Description';
// import Avatar from './components/Avatar';

const App = () => {
	return (
		<div className="App">
			{/* <Layout /> */}
			<NavigationBar />
			<SearchBox />
			<Header />
			<Main />
			<Footer />
			<CourseMaterialList />
			{/* <CourseMaterial /> */}
			{/* <CourseDetails />
			<div>
				<Avatar />
				<Title />
				<Description />
			</div> */}
		</div>
	);
};

export default App;
