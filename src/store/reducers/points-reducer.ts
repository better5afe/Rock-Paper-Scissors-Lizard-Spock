import { ADD_POINT, DEDUCT_POINT } from '../actions/points-action';
import { ActionInterface } from '../../models/interfaces';

const initialState = 0;

export const pointsReducer = (
	state = initialState,
	action: ActionInterface
) => {
	switch (action.type) {
		case ADD_POINT:
			return state + 1;
		case DEDUCT_POINT:
			return state - 1;
		default:
			return state;
	}
};
