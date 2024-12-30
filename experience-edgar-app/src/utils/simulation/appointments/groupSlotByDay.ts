import { type SlotType } from 'types/simulation/appointments/SlotType';

const groupSlotByDay = (slots: SlotType[]): { [key: string]: SlotType[] } => {
	const groupedSlots: { [key: string]: SlotType[] } = {};

	slots.forEach((slot) => {
		const day = new Date(slot.startDate).toLocaleDateString('en-US');

		if (!groupedSlots[day]) groupedSlots[day] = [];
		groupedSlots[day].push(slot);
	});

	return groupedSlots;
};

export default groupSlotByDay;
