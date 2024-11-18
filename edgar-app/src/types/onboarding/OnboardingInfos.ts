import type { HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';
import type { PatientSexType } from 'types/dashboard/medical/PatientSexType';

export type PersonalInfos = {
	id: string;
	name: string;
	firstname: string;
	birthdate: number;
	sex: PatientSexType;
	height: number; // in meters
	weight: number; // in kilograms
	primaryDoctorId: string;
	hasMedicalAntecedents: boolean;
};

export type HealthInfos = {
	healthIssues: HealthIssuesType[];
};

export type OnboardingInfos = PersonalInfos & HealthInfos;
