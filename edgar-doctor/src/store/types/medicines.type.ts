import type {
	MedicineUnitType,
	MedicineContainerType,
	MedicineDosageUnitType,
} from 'types/app/dashboard/diagnostics/MedicineType';

export interface MedicinesStoreType {
	id: string;
	dci: string;
	dosage: number;
	dosage_unit: MedicineDosageUnitType;
	dosage_form: MedicineUnitType;
	container: MedicineContainerType;
	name: string;
	unit: MedicineUnitType;
	target_diseases: string[] | null;
	treated_symptoms: string[] | null;
	side_effects: string[] | null;
}
