import { useSelector, useDispatch } from 'react-redux';
import { StateInterface } from '../models/interfaces';
import { openModal } from '../store/actions/modal-actions';
import { reset } from '../store/actions/select-actions';
import Header from './subcomponents/Header';
import GameBoard from './subcomponents/GameBoard';
import GameTurn from './subcomponents/GameTurn';
import Button from './subcomponents/Button';

import './Game.scss';

const Game = () => {
	const chosenFigure = useSelector(
		(state: StateInterface) => state.figure.figure
	);

	const dispatch = useDispatch();

	const openModalHandler = () => {
		dispatch(openModal());
	};

	const resetSelectionHandler = () => {
		dispatch(reset());
	};

	return (
		<main className='main'>
			<Header />
			{chosenFigure === '' ? <GameBoard /> : <GameTurn />}
			<Button className='rules' text='rules' onClick={openModalHandler} />
			{chosenFigure === '' && (
				<Button
					className='return'
					text='Go Back'
					onClick={resetSelectionHandler}
				></Button>
			)}
		</main>
	);
};

export default Game;
