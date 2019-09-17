import React from 'react';

const Main = () => {
	const style = {
		display: 'inline-block',
		height: '800px',
		width: '500px',
		padding: '16px',
		margin: '16px',
		border: '1px solid black'
	};
	const styleUl = {
		textAlign: 'left',
		fontSize: '18px',
		fontWeight: '600',
		lineHeight: '36px'
	};
	return (
		<div style={style}>
			<ul style={styleUl}>
				<li>Learn to use Git</li>
				<li>Advanced CSS</li>
				<li>Learning Sass</li>
				<li>Fundamentals Javascript</li>
				<li>Understanding How the React Library Works</li>
				<li>React with Wes Bos</li>
				<li>React with Mosh Mohamodani</li>
				<li>React Tyler McGinnis</li>
			</ul>
		</div>
	);
};

export default Main;
