import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';

export type PatientMedicineType = {
	id?: string;
	medicineId: string;
	periods: TreatmentPeriodType[];
	days: TreatmentDayType[];
	quantity: number;
};
