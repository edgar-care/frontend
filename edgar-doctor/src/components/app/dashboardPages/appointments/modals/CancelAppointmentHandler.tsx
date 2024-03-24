import { useBreakpointValue } from '@chakra-ui/react';

import CancelAppointmentModal from 'components/app/dashboardPages/appointments/modals/CancelAppointmentModal';
import CancelAppointmentDrawer from 'components/app/dashboardPages/appointments/modals/CancelAppointmentDrawer';

const CancelAppointmentHandler = ({
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
				<CancelAppointmentDrawer isOpen={isOpen} onClose={onClose} appointmentId={appointmentId} />
			) : (
				<CancelAppointmentModal isOpen={isOpen} onClose={onClose} appointmentId={appointmentId} />
			)}
		</>
	);
};
export default CancelAppointmentHandler;
