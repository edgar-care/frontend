import { AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';

const setupSlots = (agendaSlots: AgendaSlotType[], hourSlot: number, calendarDate: Date): AgendaSlotType[] => {
	let filteredSlots: AgendaSlotType[] = agendaSlots.filter(
		(slot) =>
			new Date(slot.startDate).getHours() === hourSlot &&
			new Date(slot.startDate).toLocaleDateString('fr-FR', {
				month: 'long',
				day: 'numeric',
				year: 'numeric',
			}) ===
				calendarDate.toLocaleDateString('fr-FR', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				}),
	);

	if (filteredSlots.length === 0) {
		const firstSlotDate = new Date(calendarDate);
		firstSlotDate.setHours(hourSlot);
		firstSlotDate.setMinutes(0);
		firstSlotDate.setSeconds(0);
		firstSlotDate.setMilliseconds(0);
		const secondSlotDate = new Date(calendarDate);
		secondSlotDate.setHours(hourSlot);
		secondSlotDate.setMinutes(30);
		secondSlotDate.setSeconds(0);
		secondSlotDate.setMilliseconds(0);

		filteredSlots = [
			{
				id: `closed-slot-${firstSlotDate.toLocaleString('fr-FR')}`,
				startDate: firstSlotDate.getTime(),
				endDate: firstSlotDate.getTime() + 1800000,
				patientId: '',
				status: 'CLOSED',
			},
			{
				id: `closed-slot-${secondSlotDate.toLocaleString('fr-FR')}`,
				startDate: secondSlotDate.getTime(),
				endDate: secondSlotDate.getTime() + 1800000,
				patientId: '',
				status: 'CLOSED',
			},
		];
	}

	if (filteredSlots.length === 1) {
		const slotDate = new Date(calendarDate);
		slotDate.setHours(hourSlot);
		slotDate.setMinutes(0);
		slotDate.setSeconds(0);
		slotDate.setMilliseconds(0);
		if (new Date(filteredSlots[0].startDate).getMinutes() === 0) slotDate.setMinutes(30);

		filteredSlots = [
			...filteredSlots,
			{
				id: `closed-slot-${slotDate.toLocaleString('fr-FR')}`,
				startDate: slotDate.getTime(),
				endDate: slotDate.getTime() + 1800000,
				patientId: '',
				status: 'CLOSED',
			},
		];
	}

	return filteredSlots;
};

export default setupSlots;
