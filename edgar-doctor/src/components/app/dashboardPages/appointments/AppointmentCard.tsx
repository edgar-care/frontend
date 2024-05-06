import { useState } from 'react';
import { Box, HStack, Icon, Skeleton, Stack, Text, VStack, useDisclosure, Button } from '@chakra-ui/react';

import PatientInfosDrawer from 'components/app/dashboardPages/appointments/modals/PatientInfosDrawer';
import UpdateAppointmentHandler from 'components/app/dashboardPages/appointments/modals/UpdateAppointmentHandler';
import CancelAppointmentHandler from 'components/app/dashboardPages/appointments/modals/CancelAppointmentHandler';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';
import SidebarIcon from 'assets/icons/SidebarIcon';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';
import { useGetPatientByIdQuery } from 'services/request/patients';

const AppointmentCard = ({ appointment }: { appointment: AppointmentType }): JSX.Element => {
	const { data: patient, isLoading } = useGetPatientByIdQuery(appointment.patientId);
	const appointmentStartDate = new Date(appointment.startDate);
	const appointmentEndDate = new Date(appointment.endDate);

	const [selectedAppointmentId, setSelectedAppointmentId] = useState('');

	const {
		isOpen: isOpenPatientInfosDrawer,
		onOpen: onOpenPatientInfosDrawer,
		onClose: onClosePatientInfosDrawer,
	} = useDisclosure();
	const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();
	const { isOpen: isOpenCancelModal, onOpen: onOpenCancelModal, onClose: onCloseCancelModal } = useDisclosure();

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
			<Skeleton isLoaded={!isLoading && patient !== undefined} w="100%">
				<Stack
					direction={{ base: 'column', smd: 'row', lg: 'column', xl: 'row' }}
					justify="space-between"
					w="100%"
				>
					<VStack w="100%" spacing="0px" px="8px" align="start">
						<HStack spacing="4px">
							<Text size="boldLg" id="edgar-dashboardAppointmentsPage-appointmentCardDoctorName-text">
								{patient?.medicalInfos.firstname} {patient?.medicalInfos.name.toUpperCase()}
							</Text>
							<HStack
								p="4px 6px 4px 6px"
								spacing="8px"
								cursor="pointer"
								rounded="8px"
								_hover={{ backgroundColor: 'blue.200' }}
								role="group"
								onClick={onOpenPatientInfosDrawer}
							>
								<Icon as={SidebarIcon} color="blue.900" w="16px" h="14px" />
								<Text size="boldSm" color="white" _groupHover={{ color: 'blue.900' }}>
									Ouvrir
								</Text>
							</HStack>
						</HStack>
						<HStack>
							<Text textAlign="center" id="edgar-dashboardAppointmentsPage-appointmentCardHour-text">
								{appointmentStartDate.toLocaleDateString('fr')} - {appointmentStartDate.getHours()}h
								{appointmentStartDate.getMinutes().toString().padStart(2, '0')}{' '}
								<Icon as={RightArrowIcon} w="14px" /> {appointmentEndDate.getHours()}h
								{appointmentEndDate.getMinutes().toString().padStart(2, '0')}
							</Text>
						</HStack>
					</VStack>
					{appointmentStartDate > new Date() && (
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
					{patient && (
						<PatientInfosDrawer
							isOpen={isOpenPatientInfosDrawer}
							onClose={onClosePatientInfosDrawer}
							patientInfos={patient}
						/>
					)}
				</Stack>
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
			</Skeleton>
		</HStack>
	);
};

export default AppointmentCard;
