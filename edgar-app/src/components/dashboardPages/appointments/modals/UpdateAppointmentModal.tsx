import { useState } from 'react';
import {
	Button,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';

import AppointmentDoctorCard from 'components/dashboardPages/appointments/AppointmentDoctorCard';

import SearchIcon from 'assets/icons/SearchIcon';
import CalendarIllustration from 'assets/illustrations/Calendarllustration';

import { type DoctorType } from 'types/dashboard/appointments/doctorTypes';

const CancelAppointmentModal = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const [selectedAppointment, setSelectedAppointment] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	const doctors: DoctorType[] = [
		{
			id: '1',
			name: 'Doctor XX',
			address: '1 rue de la paix',
			appointments: [
				{
					id: '1',
					startDate: new Date('2023-09-30 13:00'),
					endDate: new Date('2023-09-30 14:00'),
				},
				{
					id: '2',
					startDate: new Date('2023-11-12 13:00'),
					endDate: new Date('2023-11-12 14:00'),
				},
				{
					id: '3',
					startDate: new Date('2023-10-27 13:00'),
					endDate: new Date('2023-10-27 14:00'),
				},
				{
					id: '4',
					startDate: new Date('2023-09-10 13:00'),
					endDate: new Date('2023-09-10 14:00'),
				},
				{
					id: '5',
					startDate: new Date('2023-09-11 13:00'),
					endDate: new Date('2023-09-11 14:00'),
				},
				{
					id: '6',
					startDate: new Date('2023-09-11 09:00'),
					endDate: new Date('2023-09-11 10:00'),
				},
				{
					id: '7',
					startDate: new Date('2023-09-11 15:00'),
					endDate: new Date('2023-09-11 16:00'),
				},
			],
		},
		{
			id: '1',
			name: 'Doctor YY',
			address: '1 rue de la paix',
			appointments: [
				{
					id: '1',
					startDate: new Date('2023-09-30 13:00'),
					endDate: new Date('2023-09-30 14:00'),
				},
				{
					id: '2',
					startDate: new Date('2023-11-12 13:00'),
					endDate: new Date('2023-11-12 14:00'),
				},
				{
					id: '3',
					startDate: new Date('2023-10-27 13:00'),
					endDate: new Date('2023-10-27 14:00'),
				},
				{
					id: '4',
					startDate: new Date('2023-09-10 09:00'),
					endDate: new Date('2023-09-10 14:00'),
				},
			],
		},
		{
			id: '1',
			name: 'Doctor ZZ',
			address: '1 rue de la paix',
			appointments: [
				{
					id: '1',
					startDate: new Date('2023-09-30 13:00'),
					endDate: new Date('2023-09-30 14:00'),
				},
				{
					id: '2',
					startDate: new Date('2023-11-12 13:00'),
					endDate: new Date('2023-11-12 14:00'),
				},
				{
					id: '3',
					startDate: new Date('2023-10-27 13:00'),
					endDate: new Date('2023-10-27 14:00'),
				},
				{
					id: '4',
					startDate: new Date('2023-09-15 08:00'),
					endDate: new Date('2023-09-10 14:00'),
				},
			],
		},
	];

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="4xl">
			<ModalOverlay />
			<ModalContent
				maxH={{ base: 'auto', smd: 'calc(100vh - 128px)' }}
				overflowY={{ base: 'hidden', smd: 'scroll' }}
				sx={{
					'::-webkit-scrollbar': {
						width: '6px',
					},
					'::-webkit-scrollbar-track': {
						background: '#F1F1F1',
						borderRadius: '8px',
						marginTop: '32px',
						marginBottom: '32px',
					},
					'::-webkit-scrollbar-thumb': {
						background: 'grey.200',
						borderRadius: '8px',
					},
					'::-webkit-scrollbar-thumb:hover': {
						background: 'grey.300',
					},
					scrollbarWidth: 'thin',
					scrollbarColor: '#CCC #F1F1F1',
				}}
			>
				<ModalBody p="32px 32px 24px 32px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={CalendarIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl">Choisissez un rendez-vous</Text>
								<InputGroup>
									<Input placeholder="Docteur Edgar" />
									<InputRightElement>
										<Icon as={SearchIcon} />
									</InputRightElement>
								</InputGroup>
							</VStack>
						</VStack>
						<VStack w="100%">
							{doctors.map((doctor) => (
								<AppointmentDoctorCard
									key={doctor.name}
									doctorInfos={{
										...doctor,
										appointments: doctor.appointments.sort(
											(a, b) => a.startDate.getTime() - b.startDate.getTime(),
										),
									}}
									selectedAppointment={selectedAppointment}
									setSelectedAppointment={setSelectedAppointment}
								/>
							))}
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="24px 32px 32px 32px">
					<HStack w="100%">
						<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
						<Button
							size="customMd"
							variant="validate"
							w="100%"
							onClick={() => {
								if (!selectedAppointment)
									toast({ title: 'Veuillez sélectionner un rendez-vous', status: 'error' });
								else {
									// TODO: add backend call
									void appointmentId;
									onClose();
								}
							}}
						>
							Confirmer
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CancelAppointmentModal;
