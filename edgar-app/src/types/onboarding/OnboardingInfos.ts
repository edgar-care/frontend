export type Sex = 'MALE' | 'FEMALE' | 'OTHER';

export type PersonalInfos = {
	name: string;
	firstname: string;
	birthDate: Date;
	sex: Sex;
	size: number; // in meters
	weight: number; // in kilograms
};

export type MedicalInfos = {
	primaryDoctorName: string;
	allergies: string[];
	diseases: string[];
	treatmentsInProgress: string[];
};
