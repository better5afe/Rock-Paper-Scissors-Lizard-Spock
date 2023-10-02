import {
	SET_STANDARD_POINTS,
	SET_ADVANCED_POINTS,
	ADD_POINT_STANDRD,
	ADD_POINT_ADVANCED,
	DEDUCT_POINT_STANDARD,
	DEDUCT_POINT_ADVANCED,
} from '../actions/points-action';
import { PointsAction } from '../../models/interfaces';

const initialState = {
	standardPoints: 0,
	advancedPoints: 0,
};

export const pointsReducer = (state = initialState, action: PointsAction) => {
	switch (action.type) {
		case SET_STANDARD_POINTS:
			return { ...state, standardPoints: action.payload };
		case SET_ADVANCED_POINTS:
			return { ...state, advancedPoints: action.payload };
		case ADD_POINT_STANDRD:
			return { ...state, standardPoints: state.standardPoints + 1 };
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
