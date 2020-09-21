import React from 'react';
import logo from '../../img/logo.png';
import './Header.css';

export const Header: React.FC = () => {
	return (
		<header className="center">
			<img src={logo} alt="Breaking Bad" />
		</header>
	);
};
