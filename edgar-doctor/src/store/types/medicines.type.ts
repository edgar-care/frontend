import { type MedicineUnitType } from 'types/app/dashboard/diagnostics/MedicineType';

export interface MedicinesStoreType {
	id: string;
	name: string;
	unit: MedicineUnitType;
	target_diseases: string[];
	treated_symptoms: string[];
	side_effects: string[];
}
