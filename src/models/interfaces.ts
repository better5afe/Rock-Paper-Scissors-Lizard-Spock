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
	onClick: () => void;
}

export interface SvgProps {
	className: string;
}

export interface ActionInterface {
	type: string;
	payload?: string;
}

export interface FigurePayload {
	figure: string;
	value: number;
}

export interface FigureActionInterface {
	type: string;
	payload: FigurePayload;
}

export interface StateInterface {
	select: string;
	modal: boolean;
	figure: string;
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
