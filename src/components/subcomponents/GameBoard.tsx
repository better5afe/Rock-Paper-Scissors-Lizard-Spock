import { useSelector, useDispatch } from 'react-redux';
import {
	StateInterface,
	SelectedGame,
	Figures,
	Values,
	FigurePayload,
} from '../../models/interfaces';
import { choseFigure } from '../../store/actions/figure-action';
import GameButton from '../../components/subcomponents/GameButton';

import './GameBoard.scss';

const StandardBoard = require('../../assets/images/bg-triangle.png');
const AdvancedBoard = require('../../assets/images/bg-pentagon.png');

const GameBoard = () => {
	const { selectedGame, result } = useSelector(
		(state: StateInterface) => ({
			selectedGame: state.select,
			result: state.result,
		})
	);

	const dispatch = useDispatch();

	const chooseFigureHandler = (payload: FigurePayload) => {
		dispatch(choseFigure(payload));
	};

	const buttons = [
		{ figure: Figures.ROCK, value: Values.ROCK },
		{ figure: Figures.PAPER, value: Values.PAPER },
		{ figure: Figures.SCISSORS, value: Values.SCISSORS },
	];

	if (selectedGame === SelectedGame.ADVANCED) {
		buttons.push(
			{ figure: Figures.LIZARD, value: Values.LIZARD },
			{ figure: Figures.SPOCK, value: Values.SPOCK }
		);
	}

	const renderGameButtons = () => {
		return buttons.map((button) => (
			<GameButton
				key={button.figure}
				figure={button.figure}
				value={button.value}
				isAdvanced={selectedGame === SelectedGame.ADVANCED}
				onClick={() => chooseFigureHandler(button)}
			/>
		));
	};

	return (
		<div className={`game-board ${result !== '' && 'game-board--result'}`}>
			<img
				src={
					selectedGame === SelectedGame.STANDARD ? StandardBoard : AdvancedBoard
				}
				alt='Game board'
				className='game-board__img'
			/>
			{renderGameButtons()}
		</div>
	);
};

export default GameBoard;
