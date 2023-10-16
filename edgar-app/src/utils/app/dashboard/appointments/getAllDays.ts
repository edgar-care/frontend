import { type AppointmentDaysType } from 'types/dashboardPages/appointments/appointmentDaysType';

const getAllDays = (month: number, year: number): AppointmentDaysType[] => {
	const days: AppointmentDaysType[] = [];
	const date = new Date(year, month, 1);
	while (date.getMonth() === month) {
		days.push({ number: date.getDate(), currentMonth: true });
		date.setDate(date.getDate() + 1);
	}

	// add days of the previous month to complete the week
	const firstDay = new Date(year, month, 0).getDay();
	if (firstDay !== 0) {
		for (let i = 0; i < firstDay; i += 1) {
			days.unshift({ number: new Date(year, month, -i).getDate(), currentMonth: false });
		}
	}
	// add days of the next month to complete the week
	const lastDay = new Date(year, month + 1, 0).getDay();
	if (lastDay === 0) return days;
	for (let i = 0; i < 7 - lastDay; i += 1) {
		days.push({ number: new Date(year, month + 1, i + 1).getDate(), currentMonth: false });
	}
	return days;
};

export default getAllDays;
