import {Button, FormLabel, Input, useToast, VStack} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import ErrorMessage from 'components/forms/ErrorMessage';

import { useCancelDoctorAppointmentMutation } from 'services/request/appointments';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

const CancelAppointmentHandler = ({
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

	const submit = handleSubmit((data) => {
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
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Annuler votre rendez-vous"
			headerSubtitle="Vous êtes sur le point d’annuler votre rendez-vous. Si vous annulez ce rendez-vous, vous ne pourrez plus revenir en arrière."
			headerIcon={DeleteCrossIllustration}
			bodyContent={
				<VStack w="100%" align="start" spacing="4px">
					<FormLabel size="lg">La raison de l'annulation</FormLabel>
					<Input
						placeholder="Renseigner la raison de l'annulation"
						{...register('reason', { required: true })}
					/>
					{errors.reason?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
				</VStack>
			}
			footerPrimaryButton={
				<Button w="100%" variant="delete" type="submit" onClick={submit}>
					Oui, annuler ce rendez-vous
				</Button>
			}
			footerSecondaryButton={
				<Button variant="secondary" w="100%" onClick={onClose}>
					Non, garder ce rendez-vous
				</Button>
			}
		/>
	);
};
export default CancelAppointmentHandler;
