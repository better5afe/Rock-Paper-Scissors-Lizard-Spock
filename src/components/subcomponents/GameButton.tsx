import { GameButtonProps } from '../../models/interfaces';
import './GameButton.scss';

const GameButton: React.FC<GameButtonProps> = ({ figure }) => {

	return (
        <button className={`game__btn game__btn--${figure}`}>
            <div className='game__btn-inside'>
            <div className={`game__btn-inside-figure game__btn-inside-figure--${figure}`}></div>
            </div>
			
		</button>
	);
};

export default GameButton;
