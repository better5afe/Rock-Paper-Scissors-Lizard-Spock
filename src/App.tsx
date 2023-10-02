import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import SelectGame from './components/SelectGame';
import Game from './components/Game';
import RulesModal from './components/subcomponents/RulesModal';
import { useSelector, useDispatch } from 'react-redux';
import {
	setStandardPoints,
	setAdvancedPoints,
} from './store/actions/points-action';
import { StateInterface } from './models/interfaces';
import { getPoints } from './utils/store-points';

const App = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);
	const modal = useSelector((state: StateInterface) => state.modal);

	const dispatch = useDispatch();

	useEffect(() => {
		const storedPoints = getPoints();

		const standardScore = storedPoints.standardPoints;
		const advancedScore = storedPoints.advancedPoints;

		if (standardScore) {
			dispatch(setStandardPoints(+standardScore));
		}

		if (advancedScore) {
			dispatch(setAdvancedPoints(+advancedScore));
		}
		
	}, []);

	return (
		<>
			{selectedGame === '' ? <SelectGame /> : <Game />}
			{!modal
				? ''
				: ReactDOM.createPortal(
						<RulesModal />,
						document.getElementById('modal')!
				  )}
		</>
	);
};

export default App;
