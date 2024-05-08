import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

export type TreatmentFollowUpType = {
	id: string;
	treatmentId: string;
	date: number;
	periods: TreatmentPeriodType[];
};
