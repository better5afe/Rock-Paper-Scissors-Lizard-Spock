import Header from './subcomponents/Header';
import GameBoard from './subcomponents/GameBoard';
import Button from './reusable/Button';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/actions/modal-actions';
import { reset } from '../store/actions/select-actions';

import './Game.scss';

const Game = () => {
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
			<GameBoard />
			<Button className='rules' text='rules' onClick={openModalHandler} />
			<Button className='return' text='Go Back' onClick={resetSelectionHandler}></Button>
		</main>
	);
};

export default Game;
