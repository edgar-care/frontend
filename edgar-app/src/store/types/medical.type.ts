import { type Sex } from 'types/onboarding/OnboardingInfos';

export interface MedicalFolderStoreType {
	patient_health: {
		id: string;
		patients_allergies: string[];
		patients_illness: string[];
		patients_treatments: string[];
		patients_primary_doctor: string;
	};
	patient_info: {
		id: string;
		name: string;
		surname: string;
		birthdate: string;
		sex: Sex;
		weight: number;
		height: number;
	};
}
