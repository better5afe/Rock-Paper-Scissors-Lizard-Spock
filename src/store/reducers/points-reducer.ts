import {
	ADD_POINT_STANDRD,
	ADD_POINT_ADVANCED,
	DEDUCT_POINT_STANDARD,
	DEDUCT_POINT_ADVANCED,
} from '../actions/points-action';
import { ActionInterface } from '../../models/interfaces';

const initialState = {
	standardPoints: 0,
	advancedPoints: 0,
};

export const pointsReducer = (
	state = initialState,
	action: ActionInterface
) => {
	switch (action.type) {
		case ADD_POINT_STANDRD:
			return { ...state, standardPoint: state.standardPoints + 1 };
		case ADD_POINT_ADVANCED:
			return { ...state, advancedPoints: state.advancedPoints + 1 };
		case DEDUCT_POINT_STANDARD:
			return { ...state, standardPoints: state.standardPoints - 1 };
		case DEDUCT_POINT_ADVANCED:
			return { ...state, advancedPoints: state.advancedPoints - 1 };
		default:
			return state;
	}
};
