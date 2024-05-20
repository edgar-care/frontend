import { useBreakpointValue, useToast } from '@chakra-ui/react';

import DiagnosticValidateDrawer from 'components/app/dashboardPages/diagnostics/modals/validateModal/DiagnosticValidateDrawer';
import DiagnosticValidateModal from 'components/app/dashboardPages/diagnostics/modals/validateModal/DiagnosticValidateModal';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

import { useAddDiagnosticMutation } from 'services/request/diagnostics';

const DiagnosticValidateHandler = ({
	isOpen,
	onClose,
	diagnostic,
}: {
	isOpen: boolean;
	onClose: () => void;
	diagnostic: AppointmentType;
}): JSX.Element => {
	const [triggerAddDiagnostic] = useAddDiagnosticMutation();

	const isMobile = useBreakpointValue({ base: true, smd: false });
	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = () => {
		triggerAddDiagnostic({ diagnosticId: diagnostic.id, validation: true, reason: '', healMethod: '' })
			.unwrap()
			.then(() => {
				toast({ title: 'Rendez-vous accepté', status: 'success' });
				onClose();
			})
			.catch(() => {
				toast({ title: 'Erreur lors de la validation', status: 'error' });
			});
	};

	return (
		<>
			{isMobile ? (
				<DiagnosticValidateDrawer isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
			) : (
				<DiagnosticValidateModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
			)}
		</>
	);
};
export default DiagnosticValidateHandler;
