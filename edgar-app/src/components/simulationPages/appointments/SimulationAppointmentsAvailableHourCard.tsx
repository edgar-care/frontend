import { type Dispatch, type SetStateAction } from 'react';
import { Text, VStack } from '@chakra-ui/react';

import { type SlotType } from 'types/simulation/appointments/SlotType';

const SimulationAppointmentsAvailableHourCard = ({
	slot,
	selectedSlot,
	setSelectedSlot,
}: {
	slot: SlotType | undefined;
	selectedSlot: SlotType | undefined;
	setSelectedSlot: Dispatch<SetStateAction<SlotType | undefined>>;
}): JSX.Element => (
	<VStack
		p="4px 8px"
		bg={slot ? (selectedSlot?.id === slot.id ? 'blue.700' : 'blue.200') : 'transparent'}
		borderRadius="8px"
		cursor={slot ? 'pointer' : ''}
		_hover={{ bg: slot ? 'blue.500' : 'transparent' }}
		role="group"
		onClick={() => setSelectedSlot(selectedSlot?.id === slot?.id ? undefined : slot)}
	>
		{slot ? (
			<Text
				_groupHover={{ color: 'white' }}
				color={selectedSlot?.id === slot.id ? 'white' : 'black'}
				userSelect="none"
			>
				{new Date(slot.startDate)
					.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric' })
					.replace(':', 'h')}
			</Text>
		) : (
			<Text color="blue.400" userSelect="none">
				-
			</Text>
		)}
	</VStack>
);

export default SimulationAppointmentsAvailableHourCard;
