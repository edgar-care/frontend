export type PatientInfos = {
	name: string;
	last_name: string;
	age: number;
	height: number;
	weight: number;
	sex: PatientSex;
};

export type PatientSex = 'M' | 'F';
