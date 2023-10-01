import { ButtonProps } from '../../models/interfaces';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({ text, className, value, onClick }) => {
	return (
		<button
			className={`button button--${className}`}
			value={value}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
