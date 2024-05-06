import type { AppointmentStatusType } from 'types/app/dashboard/appointments/AppointmentStatusType';

export type AppointmentType = {
	id: string;
	doctorId: string;
	patientId: string;
	startDate: number;
	endDate: number;
	cancelationReason: string;
	appointmentStatus: AppointmentStatusType;
	sessionId: string;
};
