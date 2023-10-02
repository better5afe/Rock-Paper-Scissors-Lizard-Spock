import { useSelector, useDispatch } from 'react-redux';
import { StateInterface } from '../../models/interfaces';
import { choseFigure } from '../../store/actions/figure-action';
import {
	SelectedGame,
	Figures,
	Values,
	FigurePayload,
} from '../../models/interfaces';
import GameButton from '../../components/subcomponents/GameButton';
import GameTurn from './GameTurn';

import './GameBoard.scss';

const StandardBoard = require('../../assets/images/bg-triangle.png');
const AdvancedBoard = require('../../assets/images/bg-pentagon.png');

const GameBoard = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);
	const chosenFigure = useSelector(
		(state: StateInterface) => state.figure.figure
	);
	const result = useSelector((state: StateInterface) => state.result);

	const dispatch = useDispatch();

	const chooseFigureHandler = (payload: FigurePayload) => {
		dispatch(choseFigure(payload));
	};

	return (
		<div className={`game-board ${result !== '' && 'game-board--result'}`}>
			{chosenFigure === '' ? (
				<>
					<img
						src={
							selectedGame === SelectedGame.STANDARD
								? StandardBoard
								: AdvancedBoard
						}
						alt='Game board'
						className='game-board__img'
					/>
					<GameButton
						figure={Figures.ROCK}
						value={Values.ROCK}
						isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
						onClick={() =>
							chooseFigureHandler({ figure: Figures.ROCK, value: Values.ROCK })
						}
					/>
					<GameButton
						figure={Figures.PAPER}
						value={Values.PAPER}
						isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
						onClick={() =>
							chooseFigureHandler({
								figure: Figures.PAPER,
								value: Values.PAPER,
							})
						}
					/>
					<GameButton
						figure={Figures.SCISSORS}
						value={Values.SCISSORS}
						isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
						onClick={() =>
							chooseFigureHandler({
								figure: Figures.SCISSORS,
								value: Values.SCISSORS,
							})
						}
					/>
					{selectedGame === SelectedGame.ADVANCED ? (
						<>
							<GameButton
								figure={Figures.LIZARD}
								value={Values.LIZARD}
								isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
								onClick={() =>
									chooseFigureHandler({
										figure: Figures.LIZARD,
										value: Values.LIZARD,
									})
								}
							/>
							<GameButton
								figure={Figures.SPOCK}
								value={Values.SPOCK}
								isAdvanced={selectedGame === SelectedGame.ADVANCED && true}
								onClick={() =>
									chooseFigureHandler({
										figure: Figures.SPOCK,
										value: Values.SPOCK,
									})
								}
							/>
						</>
					) : (
						''
					)}
				</>
			) : (
				<GameTurn />
			)}
		</div>
	);
};

export default GameBoard;
