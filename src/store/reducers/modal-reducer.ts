import { OPEN, CLOSE } from '../actions/modal-actions';
import { ActionInterface } from '../../models/interfaces';

const initialState = false;

export const modalReducer = (state = initialState, action: ActionInterface) => {
	switch (action.type) {
		case OPEN:
			return (state = true);
		case CLOSE:
			return (state = false);
		default:
			return state;
	}
};
