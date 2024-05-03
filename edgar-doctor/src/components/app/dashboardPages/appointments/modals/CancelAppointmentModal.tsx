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
	FormLabel,
	Input,
	useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

import { useCancelDoctorAppointmentMutation } from 'services/request/appointments';
import ErrorMessage from 'components/forms/ErrorMessage';

const UpdateAppointmentModal = ({
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
		<Modal isOpen={isOpen} onClose={onClose} size={{ base: '2xl', lg: '4xl' }}>
			<ModalOverlay />
			<ModalContent p="24px" borderRadius="12px">
				<ModalBody>
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
				</ModalBody>
				<ModalFooter>
					<HStack w="100%">
						<Button variant="secondary" w="100%" onClick={onClose}>
							Non, je veux revenir en arrière
						</Button>
						<Button variant="delete" w="100%" onClick={onSubmit}>
							Oui, je suis sûr
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default UpdateAppointmentModal;
