import type { TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import type { TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

export type HealthIssuesType = {
	id?: string;
	name: string;
	treatments: TreatmentType[];
};

export type HealthIssuesMedicinesPeriodType = TreatmentPeriodType;

export type HealthIssuesMedicinesDayType = TreatmentDayType;
