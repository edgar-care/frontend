import {
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	HStack,
	ModalFooter,
	Button,
	VStack,
	Icon,
	Text,
	useToast,
} from '@chakra-ui/react';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

import { useDeleteAPatientMutation } from 'services/request/patients';

const UpdateAppointmentModal = ({
	isOpen,
	onClose,
	patientId,
}: {
	isOpen: boolean;
	onClose: () => void;
	patientId: string;
}): JSX.Element => {
	const [triggerDeleteAPatient] = useDeleteAPatientMutation();
	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="32px 32px 24px 32px">
					<VStack spacing="32px" w="100%">
						<VStack>
							<Icon as={DeleteCrossIllustration} w="48px" h="48px" />
							<VStack>
								<Text size="xl">Êtes-vous sûr ?</Text>
								<Text maxW="350px" align="center" color="grey.500">
									Si vous supprimez ce patient, vous ne pourrez plus accéder à ses informations
									médicales.
								</Text>
							</VStack>
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="24px 32px 32px 32px">
					<HStack w="100%">
						<Button variant="secondary" w="100%" size="customSm" onClick={onClose}>
							Non, je veux revenir en arrière
						</Button>
						<Button
							variant="delete"
							w="100%"
							size="customSm"
							onClick={() => {
								triggerDeleteAPatient(patientId)
									.unwrap()
									.then(() => {
										toast({ title: 'Le patient a bien été supprimé', status: 'success' });
										onClose();
									})
									.catch(() => {
										toast({ title: 'Une erreur est survenue', status: 'error' });
									});
							}}
						>
							Oui, je suis sûr
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default UpdateAppointmentModal;
