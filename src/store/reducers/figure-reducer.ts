import { CHOOSE_FIGURE } from '../actions/figure-action';
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
		default:
			return state;
	}
};
