import type { PatientSexType } from 'types/dashboard/medical/PatientSexType';

export type UpdatePatientMedicalPersonalType = {
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number;
	weight: number;
	primaryDoctorId: string;
};
