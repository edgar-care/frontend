export interface DoctorStoreType {
	id: string;
	email: string;
	name: string;
	firstname: string;
	address: {
		street: string;
		city: string;
		zip_code: string;
		country: string;
	};
}

export interface SlotsStoreType {
	id: string;
	doctor_id: string;
	id_patient: string;
	start_date: number;
	end_date: number;
	appointment_status: string;
	cancelation_reason: string;
	session_id: string;
}
