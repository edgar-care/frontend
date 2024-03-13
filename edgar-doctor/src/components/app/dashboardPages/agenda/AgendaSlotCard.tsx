import { Box, HStack, Icon, Text, useDisclosure, useToast, VStack } from '@chakra-ui/react';

import { useCloseSlotMutation, useOpenSlotMutation } from 'services/request/slots';
import { useGetPatientByIdQuery } from 'services/request/patients';

import { type AgendaSlotStatusType } from 'types/app/dashboard/agenda/AgendaSlotType';

import CircleCheckIcon from 'assets/icons/Circle/CircleCheckIcon';
import CircleCrossIcon from 'assets/icons/Circle/CIrcleCrossIcon';

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
const AgendaOpenSlotCard = ({ slotId }: { slotId: string }): JSX.Element => {
	const [triggerCloseSlot] = useCloseSlotMutation();

	const { isOpen: isHover, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<VStack
			p="8px"
			borderRadius="8px"
			w="100%"
			h="100%"
			bg={isHover ? 'grey.50' : 'blue.50'}
			border="2px solid"
			borderColor={isHover ? 'grey.200' : 'blue.200'}
			align={isHover ? 'center' : 'start'}
			onMouseEnter={onHoverOpen}
			onMouseLeave={onHoverClose}
			cursor="pointer"
			onClick={() => {
				triggerCloseSlot(slotId)
					.unwrap()
					.then(() => {
						toast({ title: 'Le créneaux a bien été fermé', status: 'success' });
					})
					.catch(() => {
						toast({ title: 'Une erreur est survenue', status: 'error' });
					});
			}}
		>
			{isHover ? (
				<HStack h="100%">
					<Text size="sm">Fermer le créneau</Text>
					<Icon as={CircleCrossIcon} w="16px" h="16px" color="grey.700" />
				</HStack>
			) : (
				<Box w="3px" minH="100%" bg="green.500" borderRadius="8px" />
			)}
		</VStack>
	);
};
const AgendaBookedSlotCard = ({ patientId }: { patientId: string }): JSX.Element => {
	const { data } = useGetPatientByIdQuery(patientId);

	return (
		<HStack p="8px" borderRadius="8px" w="100%" h="100%" bg="blue.200">
			<Box w="3px" h="100%" bg="red.500" borderRadius="8px" />
			{data && (
				<Text size="boldSm">
					{data.medicalInfos.firstname} {data.medicalInfos.name.toUpperCase()}
				</Text>
			)}
		</HStack>
	);
};

const AgendaSlotCard = ({
	type,
	patientId,
	startDate,
	endDate,
	slotId,
}: {
	type: AgendaSlotStatusType;
	patientId: string;
	startDate: number;
	endDate: number;
	slotId: string;
}): JSX.Element => {
	if (type === 'BOOKED' && patientId) return <AgendaBookedSlotCard patientId={patientId} />;
	if (type === 'OPEN') return <AgendaOpenSlotCard slotId={slotId} />;
	return <AgendaClosedSlotCard startDate={startDate} endDate={endDate} />;
};

export default AgendaSlotCard;
