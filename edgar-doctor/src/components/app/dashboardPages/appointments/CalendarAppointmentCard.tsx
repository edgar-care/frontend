import { useState } from 'react';
import { Box, HStack, Icon, Text, VStack, useDisclosure, Button, Skeleton } from '@chakra-ui/react';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

import { useGetPatientByIdQuery } from 'services/request/patients';
import UpdateAppointmentHandler from './modals/UpdateAppointmentHandler';
import CancelAppointmentHandler from './modals/CancelAppointmentHandler';

const CalendarAppointmentCard = ({ appointment }: { appointment: AppointmentType }): JSX.Element => {
	const { data: patient, isLoading } = useGetPatientByIdQuery(appointment.patientId);
	const [selectedAppointmentId, setSelectedAppointmentId] = useState('');

	const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();
	const { isOpen: isOpenCancelModal, onOpen: onOpenCancelModal, onClose: onCloseCancelModal } = useDisclosure();

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
			<Skeleton isLoaded={!isLoading && patient !== undefined} w="100%" borderRadius="8px">
				<VStack spacing="16px" w="100%" align="end">
					<VStack w="100%" spacing="0px" px="8px" align="start">
						<Text size="boldLg" id="edgar-dashboardAppointmentsPage-appointmentCalendarCardDoctorName-text">
							{patient?.medicalInfos.firstname} {patient?.medicalInfos.name.toUpperCase()}
						</Text>
						<HStack>
							<Text
								textAlign="center"
								id="edgar-dashboardAppointmentsPage-appointmentCalendarCardHour-text"
							>
								{appointmentStartDate.toLocaleDateString('fr')} - {appointmentStartDate.getHours()}h
								{appointmentStartDate.getMinutes().toString().padStart(2, '0')}{' '}
								<Icon as={RightArrowIcon} w="14px" /> {appointmentEndDate.getHours()}h
								{appointmentEndDate.getMinutes().toString().padStart(2, '0')}
							</Text>
						</HStack>
					</VStack>
					<HStack px={{ base: '8px', xl: '0px' }}>
						<Button
							size="customSm"
							variant="delete"
							w="auto"
							id="edgar-dashboardAppointmentsPage-appointmentCardCancel-button"
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
							w="auto"
							id="edgar-dashboardAppointmentsPage-appointmentCardUpdate-button"
							onClick={() => {
								setSelectedAppointmentId(appointment.id);
								onOpenUpdateModal();
							}}
						>
							Modifier
						</Button>
					</HStack>
				</VStack>
			</Skeleton>
			<UpdateAppointmentHandler
				isOpen={isOpenUpdateModal}
				onClose={onCloseUpdateModal}
				appointmentId={selectedAppointmentId}
			/>
			<CancelAppointmentHandler
				isOpen={isOpenCancelModal}
				onClose={onCloseCancelModal}
				appointmentId={selectedAppointmentId}
			/>
		</HStack>
	);
};

export default CalendarAppointmentCard;
