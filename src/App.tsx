import ReactDOM from 'react-dom';
import SelectGame from './components/SelectGame';
import Game from './components/Game';
import RulesModal from './components/subcomponents/RulesModal';
import { useSelector } from 'react-redux';
import { StateInterface } from './models/interfaces';

const App = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);
	const modal = useSelector((state: StateInterface) => state.modal);

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
