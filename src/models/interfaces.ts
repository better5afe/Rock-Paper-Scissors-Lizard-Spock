export interface ButtonProps {
	text: string;
	className?: string;
	value?: string;
	onClick: (event: React.MouseEvent) => void;
}

export interface ActionInterface {
	type: string;
	payload?: string;
}
