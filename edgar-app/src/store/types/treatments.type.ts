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
	diseaseId: string;
	stillRelevant: boolean;
	treatments: {
		period: TreatmentPeriodType[];
		day: TreatmentDayType[];
		quantity: number;
		medicineId: string;
	}[];
}

export interface AddTreatmentAndHealthIssueDTO {
	name: string;
	stillRelevant: boolean;
	treatments: {
		period: TreatmentPeriodType[];
		day: TreatmentDayType[];
		quantity: number;
		medicineId: string;
	}[];
}

export interface UpdateTreatmentDTO {
	treatments: {
		id: string;
		medicine_id: string;
		period: TreatmentPeriodType[];
		day: TreatmentDayType[];
		quantity: number;
	}[];
}
