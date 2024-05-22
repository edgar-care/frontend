import { type PatientOnboardingStatusType } from 'types/dashboard/medical/PatientOnboardingStatusType';
import { type TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';
import { type TreatmentDayType } from 'types/dashboard/medical/TreatmentDayType';
import { type PatientSexType } from 'types/dashboard/medical/PatientSexType';

export interface MedicalFolderStoreType {
	medical_folder: {
		id: string;
		name: string;
		firstname: string;
		birthdate: number;
		sex: PatientSexType;
		height: number;
		weight: number;
		primary_doctor_id: string;
		onboarding_status: PatientOnboardingStatusType;
		medical_antecedents:
			| {
					id: string;
					name: string;
					medicines:
						| {
								id: string;
								medicine_id: string;
								period: TreatmentPeriodType[];
								day: TreatmentDayType[];
								quantity: number;
						  }[]
						| null;
					still_relevant: boolean;
			  }[]
			| null;
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
