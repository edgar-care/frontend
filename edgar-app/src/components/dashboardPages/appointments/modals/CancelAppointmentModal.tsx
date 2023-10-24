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

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

import { useDeletePatientAppointmentMutation } from 'services/request/appointments';

const CancelAppointmentModal = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const [triggerDeletePatientAppointment] = useDeletePatientAppointmentMutation();

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
								triggerDeletePatientAppointment(appointmentId)
									.unwrap()
									.then(() => {
										toast({ title: 'Votre rendez-vous a bien été supprimé', status: 'success' });
										onClose();
									})
									.catch(() => {
										toast({ title: 'Une erreur est survenue', status: 'error' });
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
