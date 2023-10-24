export interface AppointmentsStoreType {
	id: string;
	doctor_id: string;
	id_patient: string;
	start_date: number;
	end_date: number;
}

export interface UpdatePatientAppointmentsDTO {
	oldAppointmentId: string;
	newAppointmentId: string;
}
