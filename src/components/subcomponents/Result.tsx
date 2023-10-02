import { useSelector, useDispatch } from 'react-redux';
import { resetResult } from '../../store/actions/result-action';
import { resetFigure } from '../../store/actions/figure-action';
import { StateInterface, Result as Outcome } from '../../models/interfaces';
import Button from '../reusable/Button';
import './Result.scss';

const Result = () => {
	const result = useSelector((state: StateInterface) => state.result);

	const dispatch = useDispatch();

	let turnResult

	if (result !== '') {
		if (result === Outcome.DRAW) {
			turnResult = `It's a draw`;
		} else if (result === Outcome.WIN) {
			turnResult = 'You win';
		} else {
			turnResult = 'You lose';
		}
	}

	const playAgainHandler = () => {
		dispatch(resetFigure());
		dispatch(resetResult());
	};

	return (
		<div className='result'>
			<p className='result__text'>{turnResult}</p>
			<Button
				text='play again'
				className='play-again'
				onClick={playAgainHandler}
			/>
		</div>
	);
};

export default Result;
