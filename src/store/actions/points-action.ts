export const SET_STANDARD_POINTS = 'SET_STANDARD_POINTS';
export const SET_ADVANCED_POINTS = 'SET_ADVANCED_POINTS';
export const ADD_POINT_STANDRD = 'ADD_POINT_STANDARD';
export const ADD_POINT_ADVANCED = 'ADD_POINT_ADVANCED';
export const DEDUCT_POINT_STANDARD = 'DEDUCT_POINT_STANDARD';
export const DEDUCT_POINT_ADVANCED = 'DEDUCT_POINT_ADVANCED';

export const setStandardPoints = (value: number) => {
	return {
		type: SET_STANDARD_POINTS,
		payload: value,
	};
};

export const setAdvancedPoints = (value: number) => {
	return {
		type: SET_ADVANCED_POINTS,
		payload: value,
	};
};

export const addPointStandard = () => {
	return {
		type: ADD_POINT_STANDRD,
	};
};

export const addPointAdvanced = () => {
	return {
		type: ADD_POINT_ADVANCED,
	};
};

export const deductPointStandard = () => {
	return {
		type: DEDUCT_POINT_STANDARD,
	};
};

export const deductPointAdvanced = () => {
	return {
		type: DEDUCT_POINT_ADVANCED,
	};
};
