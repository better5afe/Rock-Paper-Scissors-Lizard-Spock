import { combineReducers } from 'redux';
import { selectGameReducer } from './select-reducer';
import { modalReducer } from './modal-reducer';

export const rootReducer = combineReducers({
	select: selectGameReducer,
	modal: modalReducer,
});
