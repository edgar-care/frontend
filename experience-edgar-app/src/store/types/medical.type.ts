import type { PatientOnboardingStatusType } from 'types/dashboard/medical/PatientOnboardingStatusType';
import type { PatientSexType } from 'types/dashboard/medical/PatientSexType';
import type { PrescriptionTimeUnitType, TreatmentType } from 'types/dashboard/treatments/TreatmentType';
import type { HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

export interface MedicalFolderMedicalAntecedentStoreType {
	id: string;
	name: string;
	symptoms?: string[];
	treatments: MedicalFolderTreatmentStoreType[] | null;
}

export interface MedicalFolderTreatmentStoreType {
	id: string;
	created_by: string;
	start_date: number;
	end_date: number;
	medicines: MedicalFolderTreatmentMedicineStoreType[] | null;
}

export interface MedicalFolderTreatmentMedicineStoreType {
	medicine_id: string;
	comment: string;
	period: MedicalFolderTreatmentMedicinePeriodStoreType[] | null;
}

export interface MedicalFolderTreatmentMedicinePeriodStoreType {
	quantity: number;
	frequency: number;
	frequency_ratio: number;
	frequency_unit: PrescriptionTimeUnitType;
	period_length?: number;
	period_unit?: PrescriptionTimeUnitType;
}

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
		medical_antecedents: MedicalFolderMedicalAntecedentStoreType[] | null;
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
	medicalAntecedents: HealthIssuesType[];
}

export interface UpdatePatientMedicalFolderDTO {
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number;
	weight: number;
	primaryDoctorId: string;
}

export interface AddHealthIssueDTO {
	name: string;
	treatments: TreatmentType[];
}

export interface UpdateHealthIssueDTO {
	id: string;
	name: string;
}
