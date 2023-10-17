export type PatientAppointmentType = {
	id: string;
	status: 'NOT_STARTED' | 'DONE';
	doctorName: string;
	startDate: Date;
	endDate: Date;
};
