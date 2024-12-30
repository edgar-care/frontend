import { useState } from 'react';
import { Box, Button, HStack, Icon, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';

import UpdateAppointmentHandler from 'components/dashboardPages/appointments/modals/UpdateAppointmentHandler';
import CancelAppointmentHandler from 'components/dashboardPages/appointments/modals/CancelAppointmentHandler';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';

import { type AppointmentType } from 'types/dashboard/appointments/appointmentType';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

const AppointmentCard = ({ appointment }: { appointment: AppointmentType }): JSX.Element => {
	const { data: doctorInfo } = useGetDoctorByIdQuery(appointment.doctorId);

	const { isOpen: isOpenCancelModal, onOpen: onOpenCancelModal, onClose: onCloseCancelModal } = useDisclosure();
	const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();

	const [selectedAppointmentId, setSelectedAppointmentId] = useState('');

	const appointmentStartDate = new Date(appointment.startDate);
	const appointmentEndDate = new Date(appointment.endDate);

	return (
		<HStack
			spacing="4px"
			w="100%"
			p="12px"
			borderRadius="8px"
			border="2px solid"
			borderColor="blue.200"
			bg="white"
			align="stretch"
		>
			<Box as="span" w="4px" bg={appointmentEndDate > new Date() ? 'green.500' : 'blue.200'} borderRadius="4px" />
			<Stack direction={{ base: 'column', smd: 'row', lg: 'column', xl: 'row' }} justify="space-between" w="100%">
				<VStack w="100%" spacing="0px" px="8px" align="start">
					<Text size="boldLg" id="edgar-dashboardAppointmentsPage-appointmentCardDoctorName-text">
						Docteur {doctorInfo?.name.toUpperCase()}
					</Text>
					<HStack>
						<Text textAlign="center" id="edgar-dashboardAppointmentsPage-appointmentCardHour-text">
							{appointmentStartDate.toLocaleDateString('fr')} - {appointmentStartDate.getHours()}h
							{appointmentStartDate.getMinutes().toString().padStart(2, '0')}{' '}
							<Icon as={RightArrowIcon} w="14px" /> {appointmentEndDate.getHours()}h
							{appointmentEndDate.getMinutes().toString().padStart(2, '0')}
						</Text>
					</HStack>
				</VStack>
				{appointmentEndDate > new Date() && (
					<HStack px={{ base: '8px', xl: '0px' }} justify="end">
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
				)}
			</Stack>
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

export default AppointmentCard;
