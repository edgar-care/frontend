import { type PatientOnboardingStatusType } from 'types/dashboard/medical/PatientOnboardingStatusType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { type PatientSexType } from 'types/dashboard/medical/PatientSexType';

export interface MedicalFolderStoreType {
	'Medical-info': {
		id: string;
		name: string;
		firstname: string;
		birthdate: number;
		sex: PatientSexType;
		height: number;
		weight: number;
		primary_doctor_id: string;
		onboarding_status: PatientOnboardingStatusType;
		antecedent_diseases: {
			id: string;
			name: string;
			medicines: {
				id: string;
				medicine_id: string;
				period: TreatmentPeriodType[];
				day: TreatmentDayType[];
				quantity: number;
			}[];
			stillRelevant: boolean;
		}[];
	};
}

export interface AddPatientMedicalFolderDTO {
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number;
	weight: number;
	primaryDoctorId: string;
	medicalAntecedents: {
		name: string;
		medicines: {
			medicineId: string;
			period: TreatmentPeriodType[];
			day: TreatmentDayType[];
			quantity: string;
		}[];
		stillRelevant: boolean;
	}[];
}

export interface UpdatePatientMedicalFolderDTO {
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number;
	weight: number;
	primaryDoctorId: string;
	onboardingStatus: PatientOnboardingStatusType;
	medicalAntecedents: {
		name: string;
		medicines: {
			medicineId: string;
			period: TreatmentPeriodType[];
			day: TreatmentDayType[];
			quantity: string;
		}[];
		stillRelevant: boolean;
	}[];
}
