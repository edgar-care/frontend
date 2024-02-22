import { type PatientTreatmentType } from 'types/app/dashboard/patients/medicalInfos/PatientTreatmentType';

export type PatientMedicalAntecedentType = {
	id: string;
	name: string;
	treatments: PatientTreatmentType[];
	stillRelevant: boolean;
};
