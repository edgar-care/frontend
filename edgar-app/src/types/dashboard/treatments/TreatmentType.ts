import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';

export type TreatmentType = {
	name: string;
	diseaseId: string;
	stillRelevant: boolean;
	treatments: {
		period: TreatmentPeriodType;
		day: TreatmentDayType;
		quantity: string;
		medicineId: string;
	}[];
};
