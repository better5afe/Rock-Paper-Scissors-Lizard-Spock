import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	StateInterface,
	Result as Outcome,
	SelectedGame,
} from '../../models/interfaces';
import { setResult } from '../../store/actions/result-action';
import {
	addPointStandard,
	addPointAdvanced,
	deductPointStandard,
	deductPointAdvanced,
} from '../../store/actions/points-action';
import { awaitResult, gameRules } from '../../utils/game-rules';
import { storePoints } from '../../utils/store-points';
import GameButton from './GameButton';
import Result from './Result';

import './GameTurn.scss';

const GameTurn = () => {
	const { selectedGame, chosenFigure, result } = useSelector(
		(state: StateInterface) => ({
			selectedGame: state.select,
			chosenFigure: state.figure,
			result: state.result,
		})
	);

	const [i, setI] = useState(1);

	const [computerFigure, setComputerFigure] = useState({
		figure: chosenFigure.figure,
		value: chosenFigure.value,
	});

	const chosenFigureBeats = gameRules[chosenFigure.value - 1].beats as string[];

	const dispatch = useDispatch();

	const addStandardPoints = () => {
		dispatch(addPointStandard());
		storePoints(SelectedGame.STANDARD, 1);
	};

	const addAdvancedPoints = () => {
		dispatch(addPointAdvanced());
		storePoints(SelectedGame.ADVANCED, 1);
	};

	const deductStandardPoints = () => {
		dispatch(deductPointStandard());
		storePoints(SelectedGame.STANDARD, -1);
	};

	const deductAdvancedPoints = () => {
		dispatch(deductPointAdvanced());
		storePoints(SelectedGame.ADVANCED, -1);
	};

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
				selectedGame === SelectedGame.STANDARD
					? addStandardPoints()
					: addAdvancedPoints();
			} else {
				dispatch(setResult(Outcome.LOSS));
				selectedGame === SelectedGame.STANDARD
					? deductStandardPoints()
					: deductAdvancedPoints();
			}
		}
	}, [i]);

	return (
		<div className='game-turn'>
			<div className='game-turn__box'>
				<GameButton
					figure={chosenFigure.figure}
					className={`preview ${result !== '' && 'preview--user'}`}
					disabled={true}
				/>
				<p className='game-turn__text'>You</p>
			</div>
			{result !== '' ? <Result /> : ''}
			<div className='game-turn__box'>
				<GameButton
					figure={computerFigure.figure}
					className={`preview ${result !== '' && 'preview--computer'}`}
					disabled={true}
				/>
				<p className='game-turn__text'>The house</p>
			</div>
		</div>
	);
};

export default GameTurn;
