import { useBreakpointValue } from '@chakra-ui/react';

import UpdateAppointmentModal from 'components/dashboardPages/appointments/modals/UpdateAppointmentModal';
import UpdateAppointmentDrawer from 'components/dashboardPages/appointments/modals/UpdateAppointmentDrawer';

const UpdateAppointmentHandler = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<UpdateAppointmentDrawer isOpen={isOpen} onClose={onClose} appointmentId={appointmentId} />
			) : (
				<UpdateAppointmentModal isOpen={isOpen} onClose={onClose} appointmentId={appointmentId} />
			)}
		</>
	);
};
export default UpdateAppointmentHandler;
