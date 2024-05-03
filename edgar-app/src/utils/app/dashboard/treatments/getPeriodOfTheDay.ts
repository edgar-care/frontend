import { type HealthIssuesMedicinesPeriodType } from 'types/dashboard/medical/HealthIssueType';

const getPeriodOfTheDay = (date: Date | number): HealthIssuesMedicinesPeriodType => {
	const hours = typeof date === 'number' ? new Date(date).getHours() : date.getHours();

	if (hours >= 0 && hours < 12) return 'MORNING';
	if (hours >= 12 && hours < 16) return 'NOON';
	if (hours >= 16 && hours < 20) return 'EVENING';
	if (hours >= 20 && hours < 24) return 'NIGHT';

	return 'MORNING';
};

export default getPeriodOfTheDay;
