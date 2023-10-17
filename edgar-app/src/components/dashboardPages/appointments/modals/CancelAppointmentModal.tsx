import {
	Button,
	HStack,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import cancelAppointment from 'utils/api/dashboard/appointments/cancelAppointment';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

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
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="32px 32px 24px 32px">
					<VStack>
						<Icon as={DeleteCrossIllustration} w="48px" h="48px" />
						<VStack>
							<Text size="xl">Êtes-vous sûr ?</Text>
							<Text textAlign="center" maxW="350px" color="grey.500">
								Si vous annulez ce rendez-vous, vous ne pourrez plus y assister, ni le reprendre par la
								suite.
							</Text>
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="24px 32px 32px 32px">
					<HStack w="100%">
						<Button size="customSm" variant="secondary" w="100%" onClick={onClose}>
							Non, je veux revenir en arrière
						</Button>
						<Button
							size="customSm"
							variant="delete"
							w="100%"
							onClick={() =>
								cancelAppointment(appointmentId, router).then((res) => {
									toast({ title: res.title, status: res.status });
								})
							}
						>
							Oui, je suis sûr
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CancelAppointmentModal;
