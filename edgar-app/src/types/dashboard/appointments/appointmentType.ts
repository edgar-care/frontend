import { type AppointmentStatusType } from './AppointmentStatusType';

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
