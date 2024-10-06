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
	target_diseases: string[];
	treated_symptoms: string[];
	side_effects: string[];
}
