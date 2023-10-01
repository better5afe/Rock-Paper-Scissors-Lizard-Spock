import { SELECT, RESET } from '../actions/select-actions';
import { ActionInterface } from '../../models/interfaces';

const initialState = '';

export const selectGameReducer = (
	state = initialState,
	action: ActionInterface
) => {
	switch (action.type) {
		case SELECT:
			return (state = action.payload!);
		case RESET:
			return (state = '');
		default:
			return state;
	}
};
