import { Button, useToast } from '@chakra-ui/react';

import { useUpdateDoctorAppointmentMutation } from 'services/request/appointments';

const UpdateAppointmentSubmitButton = ({
	selectedAppointmentId,
	newAppointmentId,
	onClose,
}: {
	selectedAppointmentId: string;
	newAppointmentId: string;
	onClose: () => void;
}): JSX.Element => {
	const [triggerUpdateDoctorAppointment] = useUpdateDoctorAppointmentMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	const submit = () => {
		if (!selectedAppointmentId) toast({ title: 'Veuillez sélectionner un rendez-vous', status: 'error' });
		else {
			triggerUpdateDoctorAppointment({
				selectedAppointmentId,
				newAppointmentId,
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre rendez-vous a bien été modifié', status: 'success' });
					onClose();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	};
	return (
		<Button w="100%" variant="validate" type="submit" onClick={submit}>
			Confirmer
		</Button>
	);
};

export default UpdateAppointmentSubmitButton;
