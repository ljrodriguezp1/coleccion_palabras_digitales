import React from 'react';
import Header from '@components/Header';
import Accessibility from '@components/Accessibility';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			<Accessibility />
			{children}
		</div>
	);
}

export default Layout;
