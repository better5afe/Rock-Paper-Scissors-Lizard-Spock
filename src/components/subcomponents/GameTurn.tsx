import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StateInterface } from '../../models/interfaces';
import GameButton from './GameButton';
import { awaitResult } from '../../utils/await-result';

import './GameTurn.scss';

const GameTurn = () => {
	const [i, setI] = useState(1);
	const [computerFigure, setComputerFigure] = useState('lizard');

	const chosenFigure = useSelector(
		(state: StateInterface) => state.figure.figure
	);

	useEffect(() => {
		const timer = setInterval(() => {
			if (i < 10) {
				const randomFigure = awaitResult();
				setComputerFigure(randomFigure);
				setI(i + 1);
			} else {
				clearInterval(timer);
			}
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, [i]);

	return (
		<div className='game-turn'>
			<GameButton figure={chosenFigure} className='preview' disabled={true} />
			<GameButton figure={computerFigure} className='preview' disabled={true} />
		</div>
	);
};

export default GameTurn;
