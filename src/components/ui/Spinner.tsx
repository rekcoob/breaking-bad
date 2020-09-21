import React from 'react';
import spinner from '../../img/spinner.gif';

export const Spinner: React.FC = () => {
	return <img src={spinner} style={className} alt="Loading" />;
};

const className = {
	width: '200px',
	margin: 'auto',
	display: 'block',
};
