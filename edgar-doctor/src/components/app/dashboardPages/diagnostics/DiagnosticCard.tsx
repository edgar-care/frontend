import { Box, Button, HStack, Icon, Skeleton, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';

import DiagnosticHandler from 'components/app/dashboardPages/diagnostics/modals/DiagnosticHandler';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';

import { useGetPatientByIdQuery } from 'services/request/patients';

const DiagnosticCard = ({ diagnostic }: { diagnostic: AppointmentType }): JSX.Element => {
	const { data: patient, isLoading } = useGetPatientByIdQuery(diagnostic.patientId);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const appointmentStartDate = new Date(diagnostic.startDate);
	const appointmentEndDate = new Date(diagnostic.endDate);

	return (
		<Skeleton isLoaded={!isLoading && patient !== undefined} w="100%" borderRadius="8px">
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
				<Box
					as="span"
					w="4px"
					bg={
						diagnostic.appointmentStatus === 'WAITING_FOR_REVIEW'
							? 'blue.200'
							: diagnostic.appointmentStatus === 'ACCEPTED_DUE_TO_REVIEW'
								? 'green.500'
								: 'red.500'
					}
				/>
				<Stack
					direction={{ base: 'column', sm: 'row' }}
					w="100%"
					justify="space-between"
					align="center"
					px={{ base: '8px', sm: '0px' }}
				>
					<VStack w="100%" align="start" px={{ base: '0px', sm: '8px' }} spacing="0px">
						<Text size="boldLg">
							{patient?.medicalInfos.firstname} {patient?.medicalInfos.name.toUpperCase()}
						</Text>
						<Text textAlign="center" id="edgar-dashboardAppointmentsPage-appointmentCardHour-text">
							{appointmentStartDate.toLocaleDateString('fr')} - {appointmentStartDate.getHours()}h
							{appointmentStartDate.getMinutes().toString().padStart(2, '0')}{' '}
							<Icon as={RightArrowIcon} w="14px" /> {appointmentEndDate.getHours()}h
							{appointmentEndDate.getMinutes().toString().padStart(2, '0')}
						</Text>
					</VStack>
					<Button size="customSm" w={{ base: '100%', sm: 'auto' }} onClick={onOpen}>
						{diagnostic.appointmentStatus === 'WAITING_FOR_REVIEW' ? 'Examiner' : 'Consulter'}
					</Button>
				</Stack>
			</HStack>
			<DiagnosticHandler
				isOpen={isOpen}
				onClose={onClose}
				diagnostic={diagnostic}
				isFooterDisplayed={diagnostic.appointmentStatus === 'WAITING_FOR_REVIEW'}
			/>
		</Skeleton>
	);
};

export default DiagnosticCard;
