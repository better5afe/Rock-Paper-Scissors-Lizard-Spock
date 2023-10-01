export const ADD_POINT = 'ADD_POINT';
export const DEDUCT_POINT = 'DEDUCT_POINT';

export const addPoint = () => {
	return {
		type: ADD_POINT,
	};
};

export const deductPoint = () => {
	return {
		type: DEDUCT_POINT,
	};
};
