import Header from './subcomponents/Header';
import GameBoard from './subcomponents/GameBoard';
import Button from './reusable/Button';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/actions/modal-actions';

import './Game.scss';

const Game = () => {
	const dispatch = useDispatch();

	const openModalHandler = (event: React.MouseEvent) => {
		dispatch(openModal());
	};

	return (
		<main className='main'>
			<Header />
			<GameBoard />
			<Button className='rules' text='rules' onClick={openModalHandler} />
		</main>
	);
};

export default Game;
