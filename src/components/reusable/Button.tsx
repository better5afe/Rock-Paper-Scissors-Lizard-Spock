import { ButtonProps } from '../../models/interfaces';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
	return (
		<button className={`button button--${className}`} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
