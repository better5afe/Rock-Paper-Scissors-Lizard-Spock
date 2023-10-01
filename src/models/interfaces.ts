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

export interface StateInterface {
	select: string;
}

export interface SvgProps {
	className: string;
}
