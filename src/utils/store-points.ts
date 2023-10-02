export const storePoints = (type: string, points: number) => {
	const storedPoints = localStorage.getItem(type);
	let savedPoints = 0;

	if (storedPoints) {
		savedPoints = parseInt(storedPoints, 10);
	}

	savedPoints += points;

	localStorage.setItem(type, savedPoints.toString());
};

export const getPoints = () => {
	const standardPoints = localStorage.getItem('standard');
    const advancedPoints = localStorage.getItem('advanced');

	return { standardPoints, advancedPoints };
};
