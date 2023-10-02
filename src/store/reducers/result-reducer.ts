import { RESET_RESULT, SET_RESULT } from '../actions/result-action';
import { ActionInterface } from '../../models/interfaces';

const initialState = '';

export const resultReducer = (state = initialState, action: ActionInterface) => {
	switch (action.type) {
		case SET_RESULT:
			return (state = action.payload!);
		case RESET_RESULT:
			return (state = '');
		default:
			return state;
	}
};
