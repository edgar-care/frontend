export interface SlotsStoreType {
	id: string;
	doctor_id: string;
	id_patient: string;
	start_date: number;
	end_date: number;
	appointment_status: string;
}

export interface OpenSlotDTO {
	start_date: number;
	end_date: number;
}
