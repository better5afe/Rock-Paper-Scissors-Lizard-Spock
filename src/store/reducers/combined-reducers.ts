import { combineReducers } from 'redux';
import { selectGameReducer } from './select-reducer';

export const rootReducer = combineReducers({
	select: selectGameReducer,
});
