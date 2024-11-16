export interface TreatmentType {
	id: string;
	medicalAntecedentId?: string;
	startDate: number;
	endDate?: number;
	medicines: TreatmentMedicinesType[];
}

export interface TreatmentMedicinesType {
	medicineId: string;
	comment: string;
	periods: TreatmentPeriodType[];
}

export interface TreatmentPeriodType {
	quantity: number;
	frequency: number;
	frequencyRatio: number;
	frequencyUnit: PrescriptionTimeUnitType;
	periodLength?: number;
	periodUnit?: PrescriptionTimeUnitType;
}

export type PrescriptionTimeUnitType = 'JOUR' | 'SEMAINE' | 'MOIS' | 'ANNEE';
