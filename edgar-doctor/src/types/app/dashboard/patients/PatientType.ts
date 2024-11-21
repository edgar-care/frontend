import type { PatientSexType } from 'types/app/dashboard/patients/PatientSexType';
import type { HealthIssuesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

export type PatientType = {
	id: string;
	email: string;
	medicalInfos: PatientMedicalInfosType & PatientMedicalHealthInfosType;
	appointmentIds: string[];
	documentIds: string[];
};

export type PatientMedicalInfosType = {
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number;
	weight: number;
	primaryDoctorId: string;
};

export type PatientMedicalHealthInfosType = {
	healthIssues: HealthIssuesType[];
};
