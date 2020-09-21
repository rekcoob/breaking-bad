import React from 'react';
import './CharacterGrid.css';
import { Spinner } from '../ui/Spinner';
import { CharacterItem } from './CharacterItem';

type Props = {
	items: ICharacter[];
	isLoading: boolean;
};

export const CharacterGrid: React.FC<Props> = ({ items, isLoading }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<section className="cards">
			{items.map((item: ICharacter) => (
				<CharacterItem key={item.char_id} item={item} />
			))}
		</section>
	);
};
