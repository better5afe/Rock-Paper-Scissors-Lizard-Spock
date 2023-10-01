export interface ButtonProps {
	text: string;
	className?: string;
	value?: string;
	onClick: (event: React.MouseEvent) => void;
}

export interface GameButtonProps {
	figure: string;
	value: number;
	isAdvanced?: boolean;
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

export enum Figures {
	ROCK = 'rock',
	PAPER = 'paper',
	SCISSORS = 'scissors',
	LIZARD = 'lizard',
	SPOCK = 'spock',
}

export enum Values {
	ROCK = 1,
	PAPER = 2,
	SCISSORS = 3,
	LIZARD = 4,
	SPOCK = 5,
}

export enum SelectedGame {
	STANDARD = 'standard',
	ADVANCED = 'advanced',
}
