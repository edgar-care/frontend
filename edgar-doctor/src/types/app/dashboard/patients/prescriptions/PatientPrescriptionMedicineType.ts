import type { PrescriptionTimeUnitType } from 'types/app/dashboard/patients/prescriptions/PrescriptionTimeUnitType';

export type PatientPrescriptionMedicineType = {
	medicineId: string;
	qsp: number;
	qspUnit: PrescriptionTimeUnitType;
	periods: PatientPrescriptionMedicinePeriodType[];
	comment?: string;
};

export type PatientPrescriptionMedicinePeriodType = {
	quantity: number;
	frequency: number;
	frequencyRatio: number;
	frequencyUnit: PrescriptionTimeUnitType;
	periodLength?: number;
	periodUnit?: PrescriptionTimeUnitType;
};
