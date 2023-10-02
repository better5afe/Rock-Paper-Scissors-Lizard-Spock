import { useSelector, useDispatch } from 'react-redux';
import { StateInterface } from '../../models/interfaces';
import { closeModal } from '../../store/actions/modal-actions';
import StandardRules from '../../assets/icons/StandardRules';
import AdvancedRules from '../../assets/icons/AdvancedRules';

import './RulesModal.scss';

const RulesModal = () => {
	const selectedGame = useSelector((state: StateInterface) => state.select);

	const dispatch = useDispatch();

	const closeModalHandler = () => {
		dispatch(closeModal());
	};

	return (
		<div className='rules'>
			<div className='rules__container'>
				<p className='rules__container-title'>Rules</p>
				{selectedGame === 'standard' ? (
					<StandardRules className='rules__container-icon' />
				) : (
					<AdvancedRules className='rules__container-icon' />
				)}
				<button className='rules__container-btn' onClick={closeModalHandler}>
					<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
						<path
							fill='#3B4262'
							fillRule='evenodd'
							d='M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z'
							opacity='.25'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default RulesModal;
