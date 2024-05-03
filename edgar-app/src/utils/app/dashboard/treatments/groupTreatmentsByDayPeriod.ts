import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

const groupTreatmentsByDayPeriod = (
	treatments: PatientMedicineType[],
): Record<string, Record<string, PatientMedicineType[]>> => {
	const days: TreatmentDayType[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
	const periods: TreatmentPeriodType[] = ['MORNING', 'NOON', 'EVENING', 'NIGHT'];

	const groupedTreatments = days.reduce(
		(acc: Record<string, Record<string, PatientMedicineType[]>>, day) => ({
			...acc,
			[day]: periods.reduce(
				(acc2: Record<string, PatientMedicineType[]>, period) => ({
					...acc2,
					[period]: [],
				}),
				{},
			),
		}),
		{},
	);

	treatments.forEach((treatment) => {
		treatment.days.forEach((day) => {
			treatment.periods.forEach((period) => {
				groupedTreatments[day][period].push(treatment as never);
			});
		});
	});

	return groupedTreatments;
};

export default groupTreatmentsByDayPeriod;
