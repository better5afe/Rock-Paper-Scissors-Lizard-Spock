import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';
import { SelectedGame } from '../../models/interfaces';
import StandardLogo from '../../assets/icons/StandardLogo';
import AdvancedLogo from '../../assets/icons/AdvancedLogo';

import './Header.scss';

const Header = () => {
	const { selectedGame, points } = useSelector((state: StateInterface) => ({
		selectedGame: state.select,
		points: state.points,
	}));

	return (
		<header className='header'>
			<div className='header__info'>
				{selectedGame === 'standard' ? <StandardLogo /> : <AdvancedLogo />}
			</div>
			<div className='header__score'>
				<p className='header__score-title'>Score</p>
				<p className='header__score-points'>
					{selectedGame === SelectedGame.STANDARD
						? points.standardPoints
						: points.advancedPoints}
				</p>
			</div>
		</header>
	);
};

export default Header;
