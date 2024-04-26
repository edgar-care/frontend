import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import { type TreatmentFollowUpType } from 'types/dashboard/treatments/TreatmentFollowUpType';

const groupTreatmentsByDayPeriod = (
	treatments: TreatmentFollowUpType[],
): Record<string, Record<string, TreatmentFollowUpType[]>> => {
	const days: TreatmentDayType[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
	const periods: TreatmentPeriodType[] = ['MORNING', 'NOON', 'EVENING', 'NIGHT'];

	const groupedTreatments = days.reduce(
		(acc: Record<string, Record<string, TreatmentFollowUpType[]>>, day) => ({
			...acc,
			[day]: periods.reduce(
				(acc2: Record<string, TreatmentFollowUpType[]>, period) => ({
					...acc2,
					[period]: [],
				}),
				{},
			),
		}),
		{},
	);

	treatments.forEach((treatment) => {
		const day = new Date(treatment.date)
			.toLocaleDateString('en-US', { weekday: 'long' })
			.toUpperCase() as TreatmentDayType;

		treatment.periods.forEach((period) => {
			groupedTreatments[day][period].push(treatment as never);
		});
	});

	return groupedTreatments;
};

export default groupTreatmentsByDayPeriod;
