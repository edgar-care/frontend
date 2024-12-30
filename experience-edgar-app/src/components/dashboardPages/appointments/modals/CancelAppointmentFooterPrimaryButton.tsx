import { Button, useToast } from '@chakra-ui/react';

import { useDeletePatientAppointmentMutation } from 'services/request/appointments';

const CancelAppointmentFooterPrimaryButton = ({
	onClose,
	appointmentId,
}: {
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const [triggerDeletePatientAppointment] = useDeletePatientAppointmentMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<Button
			size="customMd"
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
			Oui, annuler ce rendez-vous
		</Button>
	);
};

export default CancelAppointmentFooterPrimaryButton;
