const setupAppointmentsDates = (startDate: Date, nbrOfDays: number): string[] => {
	const tempDate = new Date(startDate);
	const dates: string[] = [tempDate.toLocaleDateString('en-US')];

	for (let i = 0; i < nbrOfDays - 1; i += 1)
		dates.push(new Date(tempDate.setDate(tempDate.getDate() + 1)).toLocaleDateString('en-US'));

	return dates;
};

export default setupAppointmentsDates;
