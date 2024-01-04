import { VStack } from '@chakra-ui/react';

import AgendaSlotCard from 'components/app/dashboardPages/agenda/AgendaSlotCard';

import { type AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';

const AgendaSlotGroup = ({
	agendaSlots,
	hourSlot,
	calendarDate,
}: {
	agendaSlots: AgendaSlotType[];
	hourSlot: number;
	calendarDate: Date;
}): JSX.Element => {
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

	return (
		<VStack
			w="100%"
			p="8px 4px 6px 4px"
			spacing="4px"
			borderTop="2px solid"
			borderColor="blue.200"
			minH="100px"
			h="100px"
		>
			{filteredSlots
				.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
				.map((filteredSlot) => (
					<AgendaSlotCard
						type={filteredSlot.status}
						patientName={filteredSlot.patientId}
						key={filteredSlot.id}
						startDate={filteredSlot.startDate}
						endDate={filteredSlot.endDate}
						slotId={filteredSlot.id}
					/>
				))}
		</VStack>
	);
};

export default AgendaSlotGroup;
