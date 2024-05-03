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
	FormLabel,
	Input,
} from '@chakra-ui/react';
import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';
import ErrorMessage from 'components/forms/ErrorMessage';
import { useForm } from 'react-hook-form';
import { useCancelDoctorAppointmentMutation } from 'services/request/appointments';

const UpdateAppointmentDrawer = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const [triggerCancelDoctorAppointment] = useCancelDoctorAppointmentMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<{ reason: string }>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		triggerCancelDoctorAppointment({ appointmentId, ...data })
			.unwrap()
			.then(() => {
				toast({ title: 'Votre rendez-vous a été annulé', status: 'success' });
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});
	return (
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px" maxH="700px">
				<DrawerBody p="16px">
					<VStack spacing="32px" w="100%">
						<VStack spacing="8px">
							<Icon as={DeleteCrossIllustration} w="48px" h="48px" />
							<VStack spacing="8px">
								<Text size="xl">Êtes-vous sûr ?</Text>
								<Text size="md">
									Si vous annulez ce rendez-vous votre patient ne pourra plus y assister
								</Text>
							</VStack>
						</VStack>
						<VStack spacing="8px" w="100%">
							<FormLabel htmlFor="appointmentInput" fontWeight="bold" fontSize="md">
								La raison de l'annulation
							</FormLabel>
							<Input
								placeholder="Renseigner la raison de l'annulation"
								{...register('reason', { required: true })}
							/>
							{errors.reason?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
						</VStack>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px">
					<VStack w="100%">
						<Button variant="delete" w="100%" onClick={onSubmit}>
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
