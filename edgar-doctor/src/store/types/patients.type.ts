import type { PatientSexType } from 'types/app/dashboard/patients/PatientSexType';
import type { PatientOnboardingStatusType } from 'types/app/dashboard/patients/PatientOnboardingStatusType';
import type { TreatmentPeriodType } from 'types/app/dashboard/patients/medicalInfos/TreatmentPeriodType';
import type { TreatmentDayType } from 'types/app/dashboard/patients/medicalInfos/TreatmentDayType';
import type { DocumentCategoryType } from 'types/app/dashboard/patients/documents/DocumentCategoryType';
import type { DocumentTypeType } from 'types/app/dashboard/patients/documents/DocumentTypeType';
import type { PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

export interface PatientsStoreType {
	id: string;
	email: string;
	medical_folder: {
		name: string;
		firstname: string;
		birthdate: number;
		sex: PatientSexType;
		height: number;
		weight: number;
		primary_doctor_id: string;
		onboarding_status: PatientOnboardingStatusType;
		medical_antecedents: {
			id: string;
			name: string;
			medicines: {
				id: string;
				medicine_id: string;
				period: TreatmentPeriodType[];
				day: TreatmentDayType[];
				quantity: number;
			}[];
			still_relevant: boolean;
		}[];
	};
	rendez_vous_ids: string[];
	document_ids: string[];
}

export interface PatientDocumentStoreType {
	id: string;
	owner_id: string;
	name: string;
	document_type: DocumentTypeType;
	category: DocumentCategoryType;
	is_favorite: boolean;
	download_url: string;
}

export interface UploadAPatientDocumentDTO {
	documentType: DocumentTypeType;
	category: DocumentCategoryType;
	document: FileList;
	isFavorite: boolean;
	patientId: string;
}

export interface AddPatientDTO {
	email: string;
	medicalFolder: {
		name: string;
		firstname: string;
		birthdate: number;
		sex: PatientSexType;
		height: number;
		weight: number;
		primaryDoctorId: string;
		medicalAntecedents: PatientMedicalAntecedentType[];
	};
}
