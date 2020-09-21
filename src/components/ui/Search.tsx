import React, { useState } from 'react';
import './Search.css';

type Props = {
	getQuery: (q: string) => void;
};

export const Search: React.FC<Props> = ({ getQuery }) => {
	const [text, setText] = useState('');

	const handleChange = (q: string) => {
		setText(q);
		getQuery(q);
	};

	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Search characters"
					value={text}
					onChange={(e) => handleChange(e.target.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};
