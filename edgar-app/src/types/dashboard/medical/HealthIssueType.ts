import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

export type HealthIssuesType = {
	name: string;
	treatments: TreatmentType[];
};

export type HealthIssuesMedicinesType = {
	medicineId: string;
	period: HealthIssuesMedicinesPeriodType[];
	day: HealthIssuesMedicinesDayType[];
	quantity: string;
};

export type HealthIssuesMedicinesPeriodType = TreatmentPeriodType;

export type HealthIssuesMedicinesDayType = TreatmentDayType;
