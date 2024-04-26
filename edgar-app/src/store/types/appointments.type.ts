export interface AppointmentsStoreType {
	id: string;
	doctor_id: string;
	id_patient: string;
	start_date: number;
	end_date: number;
	cancelation_resaon: string;
	appointment_status: string;
	session_id: string;
}

export interface UpdatePatientAppointmentsDTO {
	oldAppointmentId: string;
	newAppointmentId: string;
}

export interface AddPatientAppointmentsDTO {
	appointmentId: string;
	sessionId: string;
}
