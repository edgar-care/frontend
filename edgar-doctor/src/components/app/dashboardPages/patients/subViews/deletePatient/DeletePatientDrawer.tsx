import {
	Button,
	Text,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Icon,
	VStack,
	useToast,
} from '@chakra-ui/react';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

import { useDeleteAPatientMutation } from 'services/request/patients';

const UpdateAppointmentDrawer = ({
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
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px">
				<DrawerBody p="16px">
					<VStack spacing="32px" w="100%">
						<VStack>
							<Icon as={DeleteCrossIllustration} w="48px" h="48px" />
							<VStack>
								<Text size="xl">Êtes-vous sûr ?</Text>
								<Text align="center" maxW="350px" color="grey.500">
									Si vous supprimez ce patient, vous ne pourrez plus accéder à ses informations
									médicales.
								</Text>
							</VStack>
						</VStack>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px">
					<VStack w="100%">
						<Button
							variant="delete"
							w="100%"
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
						<Button variant="secondary" w="100%" onClick={onClose}>
							Non, je veux revenir en arrière
						</Button>
					</VStack>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default UpdateAppointmentDrawer;
