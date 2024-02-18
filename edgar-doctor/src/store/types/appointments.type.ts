export interface AppointmentsStoreType {
	id: string;
	doctor_id: string;
	id_patient: string;
	start_date: number;
	end_date: number;
}

export interface UpdateAppointmentDTO {
	selectedAppointmentId: string;
	newAppointmentId: string;
}

export interface CancelAppointmentDTO {
	appointmentId: string;
	reason: string;
}
