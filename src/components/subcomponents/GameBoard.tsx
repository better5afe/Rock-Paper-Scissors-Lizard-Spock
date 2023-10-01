import { useSelector, useDispatch } from 'react-redux';
import { StateInterface } from '../../models/interfaces';
import { choseFigure } from '../../store/actions/figure-action';
import { SelectedGame, Figures, Values } from '../../models/interfaces';
import GameButton from '../../components/subcomponents/GameButton';

import './GameBoard.scss';

const StandardBoard = require('../../assets/images/bg-triangle.png');
const AdvancedBoard = require('../../assets/images/bg-pentagon.png');

const GameBoard = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);

	const dispatch = useDispatch();

	const chooseFigureHandler = (value: number) => {
		dispatch(choseFigure(value));
	};

	return (
		<div className='game-board'>
			<img
				src={
					selectedGame === SelectedGame.STANDARD ? StandardBoard : AdvancedBoard
				}
				alt='Game board'
				className='game-board__img'
			/>
			<GameButton
				figure={Figures.ROCK}
				value={Values.ROCK}
				isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
				onClick={() => chooseFigureHandler(Values.ROCK)}
			/>
			<GameButton
				figure={Figures.PAPER}
				value={Values.PAPER}
				isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
				onClick={() => chooseFigureHandler(Values.PAPER)}
			/>
			<GameButton
				figure={Figures.SCISSORS}
				value={Values.SCISSORS}
				isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
				onClick={() => chooseFigureHandler(Values.SCISSORS)}
			/>
			{selectedGame === SelectedGame.ADVANCED ? (
				<>
					<GameButton
						figure={Figures.LIZARD}
						value={Values.LIZARD}
						isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
						onClick={() => chooseFigureHandler(Values.LIZARD)}
					/>
					<GameButton
						figure={Figures.SPOCK}
						value={Values.SPOCK}
						isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
						onClick={() => chooseFigureHandler(Values.SPOCK)}
					/>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default GameBoard;
