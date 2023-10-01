import { useSelector } from 'react-redux';
import { StateInterface } from '../../models/interfaces';
import { SelectedGame, Figures, Values } from '../../models/interfaces';
import GameButton from '../../components/subcomponents/GameButton';

import './GameBoard.scss';

const StandardBoard = require('../../assets/images/bg-triangle.png');
const AdvancedBoard = require('../../assets/images/bg-pentagon.png');

const GameBoard = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);

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
			/>
			<GameButton
				figure={Figures.PAPER}
				value={Values.PAPER}
				isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
			/>
			<GameButton
				figure={Figures.SCISSORS}
				value={Values.SCISSORS}
				isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
			/>
			{selectedGame === SelectedGame.ADVANCED ? (
				<>
					<GameButton
						figure={Figures.LIZARD}
						value={Values.LIZARD}
						isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
					/>
					<GameButton
						figure={Figures.SPOCK}
						value={Values.SPOCK}
						isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
					/>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default GameBoard;
