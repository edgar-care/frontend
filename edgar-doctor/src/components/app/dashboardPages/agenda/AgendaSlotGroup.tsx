import { VStack } from '@chakra-ui/react';

import AgendaSlotCard from 'components/app/dashboardPages/agenda/AgendaSlotCard';

import { type AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';

import setupSlots from 'utils/app/dashboard/agenda/setupSlots';

const AgendaSlotGroup = ({
	agendaSlots,
	hourSlot,
	calendarDate,
}: {
	agendaSlots: AgendaSlotType[];
	hourSlot: number;
	calendarDate: Date;
}): JSX.Element => (
	<VStack
		w="100%"
		p="8px 4px 6px 4px"
		spacing="4px"
		borderTop="2px solid"
		borderColor="blue.200"
		minH="100px"
		h="100px"
	>
		{setupSlots(agendaSlots, hourSlot, calendarDate)
			.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
			.map((filteredSlot) => (
				<AgendaSlotCard
					type={filteredSlot.status}
					patientId={filteredSlot.patientId}
					key={filteredSlot.id}
					startDate={filteredSlot.startDate}
					endDate={filteredSlot.endDate}
					slotId={filteredSlot.id}
				/>
			))}
	</VStack>
);

export default AgendaSlotGroup;
