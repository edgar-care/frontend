import { Box, HStack, Icon, Text, useDisclosure, useToast, VStack } from '@chakra-ui/react';

import { useOpenSlotMutation } from 'services/request/slots';

import { type AgendaSlotStatusType } from 'types/app/dashboard/agenda/AgendaSlotType';

import CircleCheckIcon from 'assets/icons/Circle/CircleCheckIcon';

const AgendaClosedSlotCard = ({ startDate, endDate }: { startDate: number; endDate: number }): JSX.Element => {
	const [triggerOpenSlot] = useOpenSlotMutation();

	const { isOpen: isHover, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<VStack
			p="8px"
			borderRadius="8px"
			w="100%"
			bg="grey.100"
			h="100%"
			onMouseEnter={onHoverOpen}
			onMouseLeave={onHoverClose}
			cursor="pointer"
			onClick={() => {
				triggerOpenSlot({
					start_date: startDate,
					end_date: endDate + 1800000,
				})
					.unwrap()
					.then(() => {
						toast({ title: 'Le créneaux a bien été ouvert', status: 'success' });
					})
					.catch(() => {
						toast({ title: 'Une erreur est survenue', status: 'error' });
					});
			}}
		>
			{isHover && (
				<HStack h="100%">
					<Text size="sm">Ouvrir le créneau</Text>
					<Icon as={CircleCheckIcon} w="16px" h="16px" color="grey.700" />
				</HStack>
			)}
		</VStack>
	);
};
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

const AgendaSlotCard = ({
	type,
	patientName,
	startDate,
	endDate,
}: {
	type: AgendaSlotStatusType;
	patientName?: string;
	startDate: number;
	endDate: number;
}): JSX.Element => {
	if (type === 'BOOKED' && patientName) return <AgendaBookedSlotCard patientName={patientName} />;
	if (type === 'OPEN') return <AgendaOpenSlotCard />;
	return <AgendaClosedSlotCard startDate={startDate} endDate={endDate} />;
};

export default AgendaSlotCard;
