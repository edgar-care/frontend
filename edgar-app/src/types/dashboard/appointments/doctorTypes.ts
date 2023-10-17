export type AppointmentType = {
	id: string;
	startDate: Date;
	endDate: Date;
};

export type DoctorType = {
	id: string;
	name: string;
	address: string;
	appointments: AppointmentType[];
};
