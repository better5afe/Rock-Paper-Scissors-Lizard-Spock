import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';
import StandardLogo from '../../assets/icons/StandardLogo';
import AdvancedLogo from '../../assets/icons/AdvancedLogo';

import './Header.scss';

const Header = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);
	const points = useSelector((state: StateInterface) => state.points);

	return (
		<header className='header'>
			<div className='header__info'>
				{selectedGame === 'standard' ? <StandardLogo /> : <AdvancedLogo />}
			</div>
			<div className='header__score'>
				<p className='header__score-title'>Score</p>
				<p className='header__score-points'>{points}</p>
			</div>
		</header>
	);
};

export default Header;
