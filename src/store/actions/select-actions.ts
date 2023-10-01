export const SELECT = 'SELECT';
export const RESET = 'RESET';

export const select = (selectedGame: string) => {
	return {
		type: SELECT,
		payload: selectedGame,
	};
};

export const reset = () => {
	return {
		type: RESET,
	};
};
