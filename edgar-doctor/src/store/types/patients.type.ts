import type { PatientSexType } from 'types/app/dashboard/patients/PatientSexType';
import type { PatientOnboardingStatusType } from 'types/app/dashboard/patients/PatientOnboardingStatusType';
import type { DocumentCategoryType } from 'types/app/dashboard/patients/documents/DocumentCategoryType';
import type { DocumentTypeType } from 'types/app/dashboard/patients/documents/DocumentTypeType';
import type { HealthIssuesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';
import type { PrescriptionTimeUnitType } from 'types/app/dashboard/patients/prescriptions/PrescriptionTimeUnitType';

export interface PatientMedicalAntecedentStoreType {
	id: string;
	name: string;
	symptoms?: string[];
	treatments: PatientTreatmentStoreType[] | null;
}

export interface PatientTreatmentStoreType {
	id: string;
	created_by: string;
	start_date: number;
	end_date: number;
	medicines: PatientTreatmentMedicineStoreType[] | null;
}

export interface PatientTreatmentMedicineStoreType {
	medicine_id: string;
	comment: string;
	period: PatientTreatmentMedicinePeriodStoreType[] | null;
}

export interface PatientTreatmentMedicinePeriodStoreType {
	quantity: number;
	frequency: number;
	frequency_ratio: number;
	frequency_unit: PrescriptionTimeUnitType;
	period_length?: number;
	period_unit?: PrescriptionTimeUnitType;
}

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
		medical_antecedents: PatientMedicalAntecedentStoreType[] | null;
	};
	rendez_vous_ids: string[] | null;
	document_ids: string[] | null;
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
	medicalInfo: {
		name: string;
		firstname: string;
		birthdate: number;
		sex: PatientSexType;
		height: number;
		weight: number;
		primaryDoctorId: string;
		healthIssues: HealthIssuesType[];
	};
}

export interface UpdatePatientDTO {
	patientId: string;
	medicalFolder: {
		name: string;
		firstname: string;
		birthdate: number;
		sex: PatientSexType;
		height: number;
		weight: number;
		primaryDoctorId: string;
	};
}
