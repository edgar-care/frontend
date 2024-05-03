import type { AppointmentStatusType } from 'types/app/dashboard/appointments/AppointmentStatusType';

export interface AppointmentsStoreType {
	id: string;
	doctor_id: string;
	id_patient: string;
	start_date: number;
	end_date: number;
	cancelation_reason: string;
	appointment_status: AppointmentStatusType;
	session_id: string;
}

export interface UpdateAppointmentDTO {
	selectedAppointmentId: string;
	newAppointmentId: string;
}

export interface CancelAppointmentDTO {
	appointmentId: string;
	reason: string;
}
