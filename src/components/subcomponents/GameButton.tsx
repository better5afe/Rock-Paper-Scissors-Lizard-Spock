import { GameButtonProps } from '../../models/interfaces';

import './GameButton.scss';

const GameButton: React.FC<GameButtonProps> = ({
	figure,
	isAdvanced,
	className,
	onClick,
}) => {
	return (
		<button
			className={
				isAdvanced
					? `game__btn game__btn--${figure} game__btn--advanced game__btn--advanced--${figure} ${className}`
					: `game__btn game__btn--${figure} ${className}`
			}
			onClick={onClick}
		>
			<div className='game__btn-inside'>
				<div
					className={`game__btn-inside-figure game__btn-inside-figure--${figure}`}
				></div>
			</div>
		</button>
	);
};

export default GameButton;
