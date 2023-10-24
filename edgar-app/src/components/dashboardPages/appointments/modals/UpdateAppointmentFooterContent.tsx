import { Button, HStack, useToast } from '@chakra-ui/react';

import { useUpdatePatientAppointmentMutation } from 'services/request/appointments';

const UpdateAppointmentFooterContent = ({
	onClose,
	selectedAppointment,
	appointmentId,
}: {
	onClose: () => void;
	selectedAppointment: string;
	appointmentId: string;
}): JSX.Element => {
	const [triggerUpdatePatientAppointments] = useUpdatePatientAppointmentMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<HStack w="100%">
			<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
				Annuler
			</Button>
			<Button
				size="customMd"
				variant="validate"
				w="100%"
				onClick={() => {
					if (!selectedAppointment) toast({ title: 'Veuillez sélectionner un rendez-vous', status: 'error' });
					else {
						triggerUpdatePatientAppointments({
							oldAppointmentId: appointmentId,
							newAppointmentId: selectedAppointment,
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
				Confirmer
			</Button>
		</HStack>
	);
};

export default UpdateAppointmentFooterContent;
