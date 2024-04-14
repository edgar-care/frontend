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

export type HealthIssuesMedicinesPeriodType = 'MORNING' | 'NOON' | 'EVENING' | 'NIGHT';

export type HealthIssuesMedicinesDayType =
	| 'MONDAY'
	| 'TUESDAY'
	| 'WEDNESDAY'
	| 'THURSDAY'
	| 'FRIDAY'
	| 'SATURDAY'
	| 'SUNDAY';
