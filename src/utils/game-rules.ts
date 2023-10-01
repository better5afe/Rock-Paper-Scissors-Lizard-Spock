import { Figures, Values, SelectedGame } from '../models/interfaces';

export const gameRules = [
	{
		figure: Figures.ROCK,
		value: Values.ROCK,
		beats: [Figures.SCISSORS, Figures.LIZARD],
	},
	{
		figure: Figures.PAPER,
		value: Values.PAPER,
		beats: [Figures.ROCK, Figures.SPOCK],
	},
	{
		figure: Figures.SCISSORS,
		value: Values.SCISSORS,
		beats: [Figures.PAPER, Figures.LIZARD],
	},
	{
		figure: Figures.LIZARD,
		value: Values.LIZARD,
		beats: [Figures.SPOCK, Figures.PAPER],
	},
	{
		figure: Figures.SPOCK,
		value: Values.SPOCK,
		beats: [Figures.SCISSORS, Figures.ROCK],
	},
];

let initialNumber = -1;

export const awaitResult = (selectedGame: string) => {
  let randomNumber;

  do {
    if (selectedGame === SelectedGame.STANDARD) {
      randomNumber = Math.floor(Math.random() * 3);
    } else {
      randomNumber = Math.floor(Math.random() * 5);
    }
  } while (randomNumber === initialNumber); 

  initialNumber = randomNumber;

  return gameRules[randomNumber];
}