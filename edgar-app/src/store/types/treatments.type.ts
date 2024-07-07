import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

export interface FollowUpTreatmentsStoreType {
	id: string;
	treatment_id: string;
	date: number;
	period: TreatmentPeriodType[];
}

export interface CheckFollowUpTreatmentDTO {
	treatmentId: string;
	date: number;
	periods: TreatmentPeriodType[];
}

export interface AddTreatmentDTO {
	name: string;
	diseaseId: string;
	stillRelevant: boolean;
	treatments: {
		period: TreatmentPeriodType;
		day: TreatmentDayType;
		quantity: string;
		medicineId: string;
	}[];
}
