import Button from './reusable/Button';
import './SelectGame.scss';

const SelectGame = () => {
	return (
		<div className='select-box'>
			<Button
				text='Standard Game'
				onClick={() => console.log('Standard Game')}
			/>
			<Button
				text='Advanced Game'
				onClick={() => console.log('Advanced Game')}
			/>
		</div>
	);
};

export default SelectGame;
