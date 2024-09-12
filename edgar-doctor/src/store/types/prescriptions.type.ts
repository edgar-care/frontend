import type { PatientPrescriptionMedicineType } from 'types/app/dashboard/patients/prescriptions/PatientPrescriptionMedicineType';

export interface PatientPrescriptionStoreType {
	id: string;
	created_by: string;
	patient_id: string;
	URL: string;
	createdAt: number;
}

export interface UploadPatientPrescriptionDTO {
	patientId: string;
	medicines: PatientPrescriptionMedicineType[];
}
