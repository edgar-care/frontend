const getDateOfTheDay = (dayNumber: number): Date => {
	const currentDate = new Date();
	const currentDayNumber = (currentDate.getDay() - 1) % 7;
	const difference = dayNumber - currentDayNumber;

	currentDate.setDate(currentDate.getDate() + difference);
	currentDate.setMilliseconds(0);
	return currentDate;
};

export default getDateOfTheDay;
