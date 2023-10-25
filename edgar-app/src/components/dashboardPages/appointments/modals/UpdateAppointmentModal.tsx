import { useState } from 'react';
import {
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
	VStack,
} from '@chakra-ui/react';

import AppointmentDoctorCard from 'components/dashboardPages/appointments/AppointmentDoctorCard';
import UpdateAppointmentFooterContent from 'components/dashboardPages/appointments/modals/UpdateAppointmentFooterContent';

import SearchIcon from 'assets/icons/SearchIcon';
import CalendarIllustration from 'assets/illustrations/Calendarllustration';

import { type DoctorType } from 'types/dashboard/appointments/doctorTypes';

const UpdateAppointmentModal = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const [selectedAppointment, setSelectedAppointment] = useState('');

	const doctors: DoctorType[] = [
		{
			id: 'Quentin',
			name: 'Doctor XX',
			address: '1 rue de la paix',
		},
		{
			id: '1',
			name: 'Doctor YY',
			address: '1 rue de la paix',
		},
		{
			id: '1',
			name: 'Doctor ZZ',
			address: '1 rue de la paix',
		},
	];

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={{ base: '2xl', lg: '4xl' }}>
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
									doctorInfos={doctor}
									selectedAppointment={selectedAppointment}
									setSelectedAppointment={setSelectedAppointment}
								/>
							))}
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="24px 32px 32px 32px">
					<UpdateAppointmentFooterContent
						onClose={onClose}
						selectedAppointment={selectedAppointment}
						appointmentId={appointmentId}
					/>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default UpdateAppointmentModal;
