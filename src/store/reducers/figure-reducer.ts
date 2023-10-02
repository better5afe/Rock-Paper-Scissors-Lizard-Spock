import { CHOOSE_FIGURE, RESET_FIGURE } from '../actions/figure-action';
import { FigureActionInterface, FigurePayload } from '../../models/interfaces';

const initialState: FigurePayload = {
	figure: '',
	value: 0,
};

export const figureReducer = (
	state = initialState,
	action: FigureActionInterface
) => {
	switch (action.type) {
		case CHOOSE_FIGURE:
			return (state = action.payload!);
		case RESET_FIGURE:
			return (state = {
				figure: '',
				value: 0,
			});
		default:
			return state;
	}
};
