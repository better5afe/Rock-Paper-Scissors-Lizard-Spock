import { CHOOSE_FIGURE } from '../actions/figure-action';
import { ActionInterface } from '../../models/interfaces';

const initialState = '';

export const figureReducer = (
	state = initialState,
	action: ActionInterface
) => {
	switch (action.type) {
		case CHOOSE_FIGURE:
			return (state = action.payload!.toString());
		default:
			return state
	}
};
