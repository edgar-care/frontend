import { useState } from 'react';
import { Box, Button, HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';

import UpdateAppointmentHandler from 'components/dashboardPages/appointments/modals/UpdateAppointmentHandler';
import CancelAppointmentHandler from 'components/dashboardPages/appointments/modals/CancelAppointmentHandler';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';

import { type AppointmentType } from 'types/dashboard/appointments/appointmentType';

const CalendarAppointmentCard = ({ appointment }: { appointment: AppointmentType }): JSX.Element => {
	const { isOpen: isOpenCancelModal, onOpen: onOpenCancelModal, onClose: onCloseCancelModal } = useDisclosure();
	const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();

	const [selectedAppointmentId, setSelectedAppointmentId] = useState('');

	const appointmentStartDate = new Date(appointment.startDate);
	const appointmentEndDate = new Date(appointment.endDate);

	return (
		<HStack spacing="4px" w="100%" p="12px" borderRadius="8px" border="2px solid" borderColor="blue.200" bg="white">
			<Box
				as="span"
				w="4px"
				alignSelf="stretch"
				bg={appointmentEndDate > new Date() ? 'green.500' : 'blue.200'}
				borderRadius="4px"
			/>
			<VStack justify="space-between" w="100%">
				<VStack w="100%" spacing="0px" px="8px" align="start">
					<Text size="boldLg" id="edgar-dashboardAppointmentsPage-appointmentCalendarCardDoctorName-text">
						Docteur XX
					</Text>
					<HStack>
						<Text textAlign="center" id="edgar-dashboardAppointmentsPage-appointmentCalendarCardHour-text">
							{appointmentStartDate.toLocaleDateString('fr')} - {appointmentStartDate.getHours()}h
							{appointmentStartDate.getMinutes().toString().padStart(2, '0')}{' '}
							<Icon as={RightArrowIcon} w="14px" /> {appointmentEndDate.getHours()}h
							{appointmentEndDate.getMinutes().toString().padStart(2, '0')}
						</Text>
					</HStack>
				</VStack>
				{appointmentEndDate > new Date() && (
					<HStack justify="end" w="100%">
						<Button
							size="customSm"
							variant="delete"
							id="edgar-dashboardAppointmentsPage-appointmentCalendarCardCancel-button"
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
							id="edgar-dashboardAppointmentsPage-appointmentCalendarCardUpdate-button"
							onClick={() => {
								setSelectedAppointmentId(appointment.id);
								onOpenUpdateModal();
							}}
						>
							Modifier
						</Button>
					</HStack>
				)}
			</VStack>
			<CancelAppointmentHandler
				isOpen={isOpenCancelModal}
				onClose={onCloseCancelModal}
				appointmentId={selectedAppointmentId}
			/>
			<UpdateAppointmentHandler
				isOpen={isOpenUpdateModal}
				onClose={onCloseUpdateModal}
				appointmentId={selectedAppointmentId}
			/>
		</HStack>
	);
};

export default CalendarAppointmentCard;
