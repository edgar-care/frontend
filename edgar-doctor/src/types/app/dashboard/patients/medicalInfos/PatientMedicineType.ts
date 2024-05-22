import { type TreatmentPeriodType } from 'types/app/dashboard/patients/medicalInfos/TreatmentPeriodType';
import { type TreatmentDayType } from 'types/app/dashboard/patients/medicalInfos/TreatmentDayType';

export type PatientMedicineType = {
	id: string;
	medicineId: string;
	periods: TreatmentPeriodType[];
	days: TreatmentDayType[];
	quantity: number;
};
