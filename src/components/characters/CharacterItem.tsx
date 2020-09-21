import React from 'react';
import './CharacterItem.css';

type Props = {
	item: ICharacter;
};

export const CharacterItem: React.FC<Props> = ({ item }) => {
	const { img, name, portrayed, nickname, birthday, status } = item;
	console.log(item);

	return (
		<div className="card">
			<div className="card-inner">
				<div className="card-front">
					<img src={img} alt="" />
				</div>
				<div className="card-back">
					<h1>{name}</h1>
					<ul>
						<li>
							<strong>Actor Name:</strong> {portrayed}
						</li>
						<li>
							<strong>Nickname:</strong> {nickname}
						</li>
						<li>
							<strong>Birthday:</strong> {birthday}
						</li>
						<li>
							<strong>Status:</strong> {status}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
