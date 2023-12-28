import { type AgendaViewType } from 'types/app/dashboard/agenda/AgendaViewType';

const getCalendarDates = (date: Date, selectedView: AgendaViewType) => {
	const dates: Date[] = [];

	if (selectedView === 'DAY') dates.push(date);
	else if (selectedView === '3DAYS') {
		const newDate = new Date(date);
		newDate.setDate(newDate.getDate() - 1);
		for (let i = 0; i < 3; i += 1) dates.push(new Date(newDate.setDate(newDate.getDate() + 1)));
	} else {
		const newDate = new Date(date);
		newDate.setDate(newDate.getDate() - ((newDate.getDay() + 6) % 7) - 1);
		for (let i = 0; i < 7; i += 1) dates.push(new Date(newDate.setDate(newDate.getDate() + 1)));
	}
	return dates;
};

export default getCalendarDates;
