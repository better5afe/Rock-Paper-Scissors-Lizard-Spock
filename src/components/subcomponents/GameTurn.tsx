import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StateInterface, Result as Outcome } from '../../models/interfaces';
import { setResult } from '../../store/actions/result-action';
import { addPoint, deductPoint } from '../../store/actions/points-action';
import GameButton from './GameButton';
import Result from './Result';
import { awaitResult, gameRules } from '../../utils/game-rules';

import './GameTurn.scss';

const GameTurn = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);

	const result = useSelector((state: StateInterface) => state.result);

	const chosenFigure = useSelector((state: StateInterface) => state.figure);
	const chosenFigureBeats = gameRules[chosenFigure.value - 1].beats as string[];

	const [i, setI] = useState(1);
	const [computerFigure, setComputerFigure] = useState({
		figure: chosenFigure.figure,
		value: chosenFigure.value,
	});

	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setInterval(() => {
			if (i < 10) {
				const randomFigure = awaitResult(selectedGame);
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

	useEffect(() => {
		if (i === 10) {
			if (chosenFigure.figure === computerFigure.figure) {
				dispatch(setResult(Outcome.DRAW));
			} else if (chosenFigureBeats.includes(computerFigure.figure)) {
				dispatch(setResult(Outcome.WIN));
				dispatch(addPoint());
			} else {
				dispatch(setResult(Outcome.LOSS));
				dispatch(deductPoint());
			}
		}
	}, [i]);

	return (
		<div className='game-turn'>
			<GameButton
				figure={chosenFigure.figure}
				className={`preview ${result !== '' && 'preview--user'}`}
				disabled={true}
			/>
			{result === '' ? '' : <Result />}
			<GameButton
				figure={computerFigure.figure}
				className={`preview ${result !== '' && 'preview--computer'}`}
				disabled={true}
			/>
		</div>
	);
};

export default GameTurn;
