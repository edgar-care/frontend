import { type SlotType } from 'types/simulation/appointments/SlotType';

const countMaxNbrOfSlotsPerDay = (slots: { [key: string]: SlotType[] }): number => {
	let maxNbrOfSlots = 0;

	Object.keys(slots).forEach((date) => {
		const nbrOfSlots = slots[date].length;
		if (nbrOfSlots > maxNbrOfSlots) maxNbrOfSlots = nbrOfSlots;
	});

	return maxNbrOfSlots;
};

export default countMaxNbrOfSlotsPerDay;
