import { useDispatch } from 'react-redux';
import { select } from '../store/actions/select-actions';
import { SelectedGame } from '../models/interfaces';
import Button from './subcomponents/Button';

import './SelectGame.scss';

const SelectGame = () => {
	const dispatch = useDispatch();

	const selectGameHandler = (event: React.MouseEvent) => {
		const button = event.currentTarget as HTMLButtonElement;
		dispatch(select(button.value));
	};

	return (
		<div className='select-box'>
			<Button
				text='Standard Game'
				className='top'
				value={SelectedGame.STANDARD}
				onClick={selectGameHandler}
			/>
			<Button
				text='Advanced Game'
				className='bottom'
				value='advanced'
				onClick={selectGameHandler}
			/>
		</div>
	);
};

export default SelectGame;
