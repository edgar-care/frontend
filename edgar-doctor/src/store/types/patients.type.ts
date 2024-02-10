export interface PatientsStoreType {
	onboarding_health: {
		id: string;
		patients_allergies: string[];
		patients_illness: string[];
		patients_treatments: string[];
		patients_primary_doctor: string;
	};
	onboarding_info: {
		id: string;
		name: string;
		surname: string;
		birthdate: string;
		sex: string;
		weight: number;
		height: number;
	};
	patient: {
		id: string;
		onboarding_info_id: string;
		onboarding_health_id: string;
		email: string;
	};
}
