import type { TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import type { TreatmentMedicinesType } from 'types/dashboard/treatments/TreatmentType';

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
	healthIssueId: string;
	startDate: number;
	endDate?: number;
	medicines: TreatmentMedicinesType[];
}

export interface UpdateTreatmentDTO {
	id: string;
	startDate: number;
	endDate?: number;
	medicines: TreatmentMedicinesType[];
}
