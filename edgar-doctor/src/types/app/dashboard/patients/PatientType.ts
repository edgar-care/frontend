import { type PatientSexType } from 'types/app/dashboard/patients/PatientSexType';
import { type PatientOnboardingStatusType } from 'types/app/dashboard/patients/PatientOnboardingStatusType';
import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

export type PatientType = {
	id: string;
	email: string;
	medicalInfos: PatientMedicalInfosType & PatientMedicalInfosHealthType;
	appointmentIds: string[];
	documentIds: string[];
};

export type PatientMedicalInfosType = {
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number;
	weight: number;
	primaryDoctorId: string;
};

export type PatientMedicalInfosHealthType = {
	onboardingStatus: PatientOnboardingStatusType;
	medicalAntecedents: PatientMedicalAntecedentType[];
};
