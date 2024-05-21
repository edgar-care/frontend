import { useBreakpointValue } from '@chakra-ui/react';

import DiagnosticModal from 'components/app/dashboardPages/diagnostics/modals/DiagnosticModal';
import DiagnosticDrawer from 'components/app/dashboardPages/diagnostics/modals/DiagnosticDrawer';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const DiagnosticHandler = ({
	isOpen,
	onClose,
	diagnostic,
	isFooterDisplayed,
}: {
	isOpen: boolean;
	onClose: () => void;
	diagnostic: AppointmentType;
	isFooterDisplayed?: boolean;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<DiagnosticDrawer
					isOpen={isOpen}
					onClose={onClose}
					diagnostic={diagnostic}
					isFooterDisplayed={isFooterDisplayed}
				/>
			) : (
				<DiagnosticModal
					isOpen={isOpen}
					onClose={onClose}
					diagnostic={diagnostic}
					isFooterDisplayed={isFooterDisplayed}
				/>
			)}
		</>
	);
};
export default DiagnosticHandler;
