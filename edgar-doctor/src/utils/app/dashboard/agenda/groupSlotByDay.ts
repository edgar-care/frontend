import { type AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';

const groupSlotByDay = (slots: AgendaSlotType[]): { [key: string]: AgendaSlotType[] } => {
	const groupedSlots: { [key: string]: AgendaSlotType[] } = {};

	slots.forEach((slot) => {
		const day = new Date(slot.startDate).toLocaleDateString('fr-FR').split('/').reverse().join('-');

		if (!groupedSlots[day]) groupedSlots[day] = [];
		groupedSlots[day].push(slot);
	});

	return groupedSlots;
};

export default groupSlotByDay;
