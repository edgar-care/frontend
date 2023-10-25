export type Sex = 'MALE' | 'FEMALE' | 'OTHER';

export type PersonalInfos = {
	name: string;
	firstname: string;
	birthDate: string;
	sex: Sex;
	size: number; // in meters
	weight: number; // in kilograms
};

export type HealthInfos = {
	primaryDoctorName: string;
	allergies: string[];
	diseases: string[];
	treatmentsInProgress: string[];
};
