import { Button, useToast } from '@chakra-ui/react';

import { useUpdatePatientAppointmentMutation } from 'services/request/appointments';

const UpdateAppointmentFooterContent = ({
	onClose,
	newAppointmentId,
	appointmentId,
}: {
	onClose: () => void;
	newAppointmentId: string;
	appointmentId: string;
}): JSX.Element => {
	const [triggerUpdatePatientAppointments] = useUpdatePatientAppointmentMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<Button
			size="customMd"
			w="100%"
			onClick={() => {
				if (!newAppointmentId) toast({ title: 'Veuillez sélectionner un rendez-vous', status: 'error' });
				else {
					triggerUpdatePatientAppointments({
						oldAppointmentId: appointmentId,
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
			}}
		>
			Valider le changement
		</Button>
	);
};

export default UpdateAppointmentFooterContent;
