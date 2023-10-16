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

import cancelAppointment from 'utils/api/dashboard/appointments/cancelAppointment';
import { useRouter } from 'next/navigation';
import CalendarIllustration from 'assets/illustrations/Calendarllustration';
import SearchIcon from 'assets/icons/SearchIcon';
import AppointmentDoctorCard from 'components/dashboardPages/appointments/AppointmentDoctorCard';

const CancelAppointmentModal = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const router = useRouter();

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="3xl">
			<ModalOverlay />
			<ModalContent>
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
						<AppointmentDoctorCard
							doctorInfos={{ doctorName: 'Doctor Edgar', address: '10 rue du Médecin, 69001 - Lyon' }}
						/>
					</VStack>
				</ModalBody>
				<ModalFooter p="24px 32px 32px 32px">
					<HStack w="100%">
						<Button size="sm" variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
						<Button size="sm" variant="validate" w="100%" onClick={() => {}}>
							Confirmer
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CancelAppointmentModal;
