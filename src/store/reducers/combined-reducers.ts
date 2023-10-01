import { combineReducers } from 'redux';
import { selectGameReducer } from './select-reducer';
import { modalReducer } from './modal-reducer';
import { figureReducer } from './figure-reducer';
import { resultReducer } from './result-reducer';
import { pointsReducer } from './points-reducer';

export const rootReducer = combineReducers({
	select: selectGameReducer,
	modal: modalReducer,
	figure: figureReducer,
	result: resultReducer,
	points: pointsReducer,
});
