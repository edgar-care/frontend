import type { TreatmentPeriodType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';
import type { PrescriptionTimeUnitType } from 'types/app/dashboard/patients/prescriptions/PrescriptionTimeUnitType';

export type PatientPrescriptionMedicineType = {
	medicineId: string;
	qsp: number;
	qspUnit: PrescriptionTimeUnitType;
	periods: TreatmentPeriodType[];
	comment?: string;
};
