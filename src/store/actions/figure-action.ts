import { FigurePayload } from '../../models/interfaces';

export const CHOOSE_FIGURE = 'CHOOSE_FIGURE';

export const choseFigure = (payload: FigurePayload) => {
	return {
		type: CHOOSE_FIGURE,
		payload: payload,
	};
};
