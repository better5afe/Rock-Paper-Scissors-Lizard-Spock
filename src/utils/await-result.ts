import { Figures } from '../models/interfaces';

const figures = [
	Figures.ROCK,
	Figures.PAPER,
	Figures.SCISSORS,
	Figures.LIZARD,
	Figures.SPOCK,
];

export const awaitResult = () => {
	const randomNumber = Math.floor(Math.random() * 5);

	return figures[randomNumber];
};
