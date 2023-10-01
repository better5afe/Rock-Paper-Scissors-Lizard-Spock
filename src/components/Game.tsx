import Header from './subcomponents/Header';
import StandardBoard from './subcomponents/StandardBoard';
import AdvancedBoard from './subcomponents/AdvancedBoard';
import Button from './reusable/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateInterface } from '../models/interfaces';
import { openModal } from '../store/actions/modal-actions';

import './Game.scss';

const Game = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);

	const dispatch = useDispatch();

	const openModalHandler = (event: React.MouseEvent) => {
		dispatch(openModal());
	};

	return (
		<main className='main'>
			<Header />
			{selectedGame === 'standard' ? <StandardBoard /> : <AdvancedBoard />}
			<Button className='rules' text='rules' onClick={openModalHandler} />
		</main>
	);
};

export default Game;
