import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	HStack,
	Icon,
	Text,
	useBreakpointValue,
	useToast,
	VStack,
} from '@chakra-ui/react';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

import { useDeletePatientAppointmentMutation } from 'services/request/appointments';

const CancelAppointmentDrawer = ({
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

	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px">
				<DrawerBody p="16px">
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
				</DrawerBody>
				<DrawerFooter p="16px">
					{isMobile ? (
						<VStack w="100%">
							<Button
								size="customMd"
								variant="delete"
								w="100%"
								onClick={() =>
									triggerDeletePatientAppointment(appointmentId)
										.unwrap()
										.then(() => {
											toast({
												title: 'Votre rendez-vous a bien été supprimé',
												status: 'success',
											});
											onClose();
										})
										.catch(() => {
											toast({ title: 'Une erreur est survenue', status: 'error' });
										})
								}
							>
								Oui, je suis sûr
							</Button>
							<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
								Non, je veux revenir en arrière
							</Button>
						</VStack>
					) : (
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
											toast({
												title: 'Votre rendez-vous a bien été supprimé',
												status: 'success',
											});
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
					)}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default CancelAppointmentDrawer;
