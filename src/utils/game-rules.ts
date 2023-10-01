import { Figures } from '../models/interfaces';

export const gameRules = [
	{
		figure: Figures.ROCK,
		beats: [Figures.SCISSORS, Figures.LIZARD],
	},
	{
		figure: Figures.PAPER,
		beats: [Figures.ROCK, Figures.SPOCK],
	},
	{
		figure: Figures.SCISSORS,
		beats: [Figures.PAPER, Figures.LIZARD],
	},
	{
		figure: Figures.LIZARD,
		beats: [Figures.SPOCK, Figures.PAPER],
	},
	{
		figure: Figures.SPOCK,
		beats: [Figures.SCISSORS, Figures.ROCK],
	},
];
