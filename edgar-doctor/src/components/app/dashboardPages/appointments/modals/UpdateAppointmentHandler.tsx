import { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';
import UpdateAppointmentContent from 'components/app/dashboardPages/appointments/modals/UpdateAppointmentContent';

import { useUpdateDoctorAppointmentMutation } from 'services/request/appointments';

import CalendarIllustration from 'assets/illustrations/CalendarIllustration';

const UpdateAppointmentHandler = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const [triggerUpdateDoctorAppointment] = useUpdateDoctorAppointmentMutation();

	const [selectedAppointment, setSelectedAppointment] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	const submit = () => {
		if (!selectedAppointment) toast({ title: 'Veuillez sélectionner un rendez-vous', status: 'error' });
		else {
			triggerUpdateDoctorAppointment({
				selectedAppointmentId: appointmentId,
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
	};

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Modifier votre rendez-vous"
			headerSubtitle="Sélectionner une nouvelle date pour votre rendez-vous.\nLe rendez-vous est initialement prévu pour le dimanche 5 novembre de 15h à 16h."
			headerIcon={CalendarIllustration}
			bodyContent={
				<UpdateAppointmentContent
					selectedAppointment={selectedAppointment}
					setSelectedAppointment={setSelectedAppointment}
				/>
			}
			footerPrimaryButton={
				<Button w="100%" type="submit" onClick={submit}>
					Valider le changement
				</Button>
			}
			footerSecondaryButton={
				<Button variant="secondary" w="100%" onClick={onClose}>
					Annuler
				</Button>
			}
		/>
	);
};
export default UpdateAppointmentHandler;
