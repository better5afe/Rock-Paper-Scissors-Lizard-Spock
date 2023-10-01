export const SET_RESULT = 'SET_RESULT';
export const RESET_RESULT = 'RESET_RESULT';

export const setResult = (result: string) => {
	return {
		type: SET_RESULT,
		payload: result,
	};
};

export const resetResult = () => {
	return {
		type: RESET_RESULT,
	};
};
