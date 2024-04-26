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
