import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

export type Sex = 'MALE' | 'FEMALE' | 'OTHER';

export type PersonalInfos = {
	name: string;
	firstname: string;
	birthDate: string;
	sex: Sex;
	size: number; // in meters
	weight: number; // in kilograms
	primaryDoctorId: string;
	hasMedicalAntecedents: boolean;
};

export type HealthInfos = {
	healthIssues: HealthIssuesType[];
};

export type OnboardingInfos = PersonalInfos & HealthInfos;
