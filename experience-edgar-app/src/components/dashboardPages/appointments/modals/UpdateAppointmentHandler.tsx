import { useState } from 'react';
import { Button } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';
import UpdateAppointmentBody from 'components/dashboardPages/appointments/modals/UpdateAppointmentBody';
import UpdateAppointmentFooterPrimaryButton from 'components/dashboardPages/appointments/modals/UpdateAppointmentFooterPrimaryButton';

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
	const [pageIndex, setPageIndex] = useState(1);
	const [newAppointmentId, setNewAppointmentId] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const onCloseAction = () => {
		setPageIndex(1);
		setNewAppointmentId('');
		setSearchValue('');
		onClose();
	};

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onCloseAction}
			size="3xl"
			headerTitle="Modifier votre rendez-vous"
			headerSubtitle="Sélectionner une nouvelle date pour votre rendez-vous. Vous pouvez garder le même médecin ou en choisir un autre."
			headerIcon={CalendarIllustration}
			bodyContent={
				<UpdateAppointmentBody
					pageIndex={pageIndex}
					newAppointmentId={newAppointmentId}
					searchValue={searchValue}
					setPageIndex={setPageIndex}
					setNewAppointmentId={setNewAppointmentId}
					setSearchValue={setSearchValue}
				/>
			}
			footerPrimaryButton={
				<UpdateAppointmentFooterPrimaryButton
					appointmentId={appointmentId}
					newAppointmentId={newAppointmentId}
					onClose={onCloseAction}
				/>
			}
			footerSecondaryButton={
				<Button size="customMd" variant="secondary" w="100%" onClick={onCloseAction}>
					Annuler
				</Button>
			}
		/>
	);
};
export default UpdateAppointmentHandler;
