import { Button } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';
import CancelAppointmentFooterPrimaryButton from 'components/dashboardPages/appointments/modals/CancelAppointmentFooterPrimaryButton';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

const CancelAppointmentHandler = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => (
	<ModalHandler
		isOpen={isOpen}
		onClose={onClose}
		size="3xl"
		headerTitle="Annuler votre rendez-vous"
		headerSubtitle="Vous êtes sur le point d’annuler votre rendez-vous. Si vous annuler ce rendez-vous, vous ne pourrez plus y assister."
		headerIcon={DeleteCrossIllustration}
		footerPrimaryButton={<CancelAppointmentFooterPrimaryButton appointmentId={appointmentId} onClose={onClose} />}
		footerSecondaryButton={
			<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
				Non, garder ce rendez-vous
			</Button>
		}
	/>
);
export default CancelAppointmentHandler;
