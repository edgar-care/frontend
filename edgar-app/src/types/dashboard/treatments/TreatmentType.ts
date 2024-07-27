import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';

export type TreatmentType = {
	name?: string;
	diseaseId?: string;
	existing: boolean;
	stillRelevant: boolean;
	treatments: TreatmentMedicinesType[];
};

export type TreatmentMedicinesType = {
	period: TreatmentPeriodType[];
	day: TreatmentDayType[];
	quantity: string;
	medicineId: string;
};
