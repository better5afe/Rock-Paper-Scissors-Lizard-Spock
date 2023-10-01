export interface ButtonProps {
	text: string;
	className?: string;
	value?: string;
	onClick: (event: React.MouseEvent) => void;
}

export interface GameButtonProps {
	figure: string;
}

export interface ActionInterface {
	type: string;
	payload?: string;
}

export interface StateInterface {
	select: string;
	modal: boolean;
}

export interface SvgProps {
	className: string;
}
