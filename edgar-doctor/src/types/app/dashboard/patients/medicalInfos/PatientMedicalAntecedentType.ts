import { type PatientMedicineType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicineType';

export type PatientMedicalAntecedentType = {
	id: string;
	name: string;
	medicines: PatientMedicineType[];
	stillRelevant: boolean;
};
