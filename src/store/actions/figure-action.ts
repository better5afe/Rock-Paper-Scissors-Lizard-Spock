export const CHOOSE_FIGURE = 'CHOOSE_FIGURE';

export const choseFigure = (value: number) => {
	return {
		type: CHOOSE_FIGURE,
		payload: value.toString(),
	};
};
