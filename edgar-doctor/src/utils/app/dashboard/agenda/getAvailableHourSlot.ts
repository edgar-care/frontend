import { type AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';

const getAvailableHourSlot = (slots: AgendaSlotType[] | undefined): string[] => {
	const availableHours: string[] = [];

	for (let hour = 0; hour < 24; hour += 1) {
		for (let minute = 0; minute < 60; minute += 30)
			availableHours.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
	}

	if (!slots || slots.length === 0) return availableHours;
	slots.forEach((slot) => {
		const startHour = new Date(slot.startDate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

		const index = availableHours.indexOf(`${startHour}`);
		if (index > -1) availableHours.splice(index, 1);
	});

	return availableHours;
};

export default getAvailableHourSlot;
