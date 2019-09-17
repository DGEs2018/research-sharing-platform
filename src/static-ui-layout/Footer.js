import React from 'react';

const Footer = () => {
	const footerStyle = {
		textTransform: 'text-uppercase'
	};
	return (
		<footer>
			<h5 style={footerStyle}>Footer Content</h5>
			<p>Posted by: Poco students Basel Batch</p>
			<p>
				Contact information: <a href="mailto: somewhere@example.com" />
			</p>
			<p>NB: this is a common share teaching resources and may not be reproduced for commercial purposes</p>
			<p>&pcopy; 2019: ourpage.ch </p>
		</footer>
	);
};
export default Footer;
