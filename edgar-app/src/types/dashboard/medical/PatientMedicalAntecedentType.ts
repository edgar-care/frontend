import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

export type PatientMedicalAntecedentType = {
	id: string;
	name: string;
	medicines: PatientMedicineType[];
	stillRelevant: boolean;
};
