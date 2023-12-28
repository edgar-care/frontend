export type AgendaSlotStatusType = 'CLOSED' | 'OPEN' | 'BOOKED';

export type AgendaSlotType = {
	id: string;
	startDate: number;
	endDate: number;
	patientId: string;
	status: AgendaSlotStatusType;
};
