export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export const openModal = () => {
	return {
		type: OPEN,
	};
};

export const closeModal = () => {
	return {
		type: CLOSE,
	};
};
