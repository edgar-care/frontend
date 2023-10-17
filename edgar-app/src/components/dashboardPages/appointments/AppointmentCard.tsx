import { useState } from 'react';
import { Box, Button, HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';

import CancelAppointmentModal from 'components/dashboardPages/appointments/modals/CancelAppointmentModal';
import UpdateAppointmentModal from 'components/dashboardPages/appointments/modals/UpdateAppointmentModal';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';

import { type PatientAppointmentType } from 'types/dashboard/appointments/patientAppointmentType';

const AppointmentCard = ({ appointment }: { appointment: PatientAppointmentType }): JSX.Element => {
	const { isOpen: isOpenCancelModal, onOpen: onOpenCancelModal, onClose: onCloseCancelModal } = useDisclosure();
	const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();

	const [selectedAppointmentId, setSelectedAppointmentId] = useState('');

	return (
		<HStack spacing="4px" w="100%" p="12px" borderRadius="8px" border="2px solid" borderColor="blue.200" bg="white">
			<Box
				as="span"
				w="4px"
				h="45px"
				bg={appointment.status === 'NOT_STARTED' ? 'green.500' : 'blue.200'}
				borderRadius="4px"
			/>
			<HStack justify="space-between" w="100%">
				<VStack w="100%" spacing="0px" px="8px" align="start">
					<Text size="boldLg">{appointment.doctorName}</Text>
					<HStack>
						<Text textAlign="center">
							{appointment.startDate.toLocaleDateString('fr')} - {appointment.startDate.getHours()}h
							{appointment.startDate.getMinutes().toString().padStart(2, '0')}{' '}
							<Icon as={RightArrowIcon} w="14px" /> {appointment.endDate.getHours()}h
							{appointment.endDate.getMinutes().toString().padStart(2, '0')}
						</Text>
					</HStack>
				</VStack>
				{appointment.status !== 'DONE' && (
					<HStack>
						<Button
							size="customSm"
							variant="delete"
							onClick={() => {
								setSelectedAppointmentId(appointment.id);
								onOpenCancelModal();
							}}
						>
							Annuler
						</Button>
						<Button
							size="customSm"
							variant="secondary"
							onClick={() => {
								setSelectedAppointmentId(appointment.id);
								onOpenUpdateModal();
							}}
						>
							Modifier
						</Button>
					</HStack>
				)}
			</HStack>
			<CancelAppointmentModal
				isOpen={isOpenCancelModal}
				onClose={onCloseCancelModal}
				appointmentId={selectedAppointmentId}
			/>
			<UpdateAppointmentModal
				isOpen={isOpenUpdateModal}
				onClose={onCloseUpdateModal}
				appointmentId={selectedAppointmentId}
			/>
		</HStack>
	);
};

export default AppointmentCard;
