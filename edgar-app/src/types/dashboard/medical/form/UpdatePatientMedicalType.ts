import type { PatientSexType } from 'types/dashboard/medical/PatientSexType';
import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

export type UpdatePatientMedicalPersonalType = {
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number;
	weight: number;
	primaryDoctorId: string;
};

export type UpdatePatientMedicalHealthType = {
	medicalAntecedents: PatientMedicalAntecedentType[];
};
