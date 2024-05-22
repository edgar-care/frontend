import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';

export type HealthIssuesType = {
	name: string;
	medicines: HealthIssuesMedicinesType[];
	stillRelevant: boolean;
};

export type HealthIssuesMedicinesType = {
	medicineId: string;
	period: HealthIssuesMedicinesPeriodType[];
	day: HealthIssuesMedicinesDayType[];
	quantity: string;
};

export type HealthIssuesMedicinesPeriodType = TreatmentPeriodType;

export type HealthIssuesMedicinesDayType = TreatmentDayType;
