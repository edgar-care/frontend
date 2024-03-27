import { type PatientSexType } from 'types/dashboard/medical/PatientSexType';
import { type PatientOnboardingStatusType } from 'types/dashboard/medical/PatientOnboardingStatusType';
import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

export type PatientMedicalType = PatientPersonalType &
	PatientHealthType & {
		id: string;
		onboardingStatus: PatientOnboardingStatusType;
	};

export type PatientPersonalType = {
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number;
	weight: number;
};

export type PatientHealthType = {
	primaryDoctorId: string;
	medicalAntecedents: PatientMedicalAntecedentType[];
};
