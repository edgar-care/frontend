import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import { AgendaSlotStatusType } from 'types/app/dashboard/agenda/AgendaSlotType';

const AgendaClosedSlotCard = (): JSX.Element => <Box p="8px" borderRadius="8px" w="100%" bg="grey.100" h="100%" />;
const AgendaOpenSlotCard = (): JSX.Element => (
	<VStack
		p="8px"
		borderRadius="8px"
		w="100%"
		h="100%"
		bg="blue.50"
		border="2px solid"
		borderColor="blue.200"
		align="start"
	>
		<Box w="3px" minH="100%" bg="green.500" borderRadius="8px" />
	</VStack>
);
const AgendaBookedSlotCard = ({ patientName }: { patientName: string }): JSX.Element => (
	<HStack p="8px" borderRadius="8px" w="100%" h="100%" bg="blue.200">
		<Box w="3px" h="100%" bg="red.500" borderRadius="8px" />
		<Text size="boldSm">{patientName}</Text>
	</HStack>
);

const AgendaSlotCard = ({ type, patientName }: { type: AgendaSlotStatusType; patientName?: string }): JSX.Element => {
	if (type === 'BOOKED' && patientName) return <AgendaBookedSlotCard patientName={patientName} />;
	if (type === 'OPEN') return <AgendaOpenSlotCard />;
	return <AgendaClosedSlotCard />;
};

export default AgendaSlotCard;
