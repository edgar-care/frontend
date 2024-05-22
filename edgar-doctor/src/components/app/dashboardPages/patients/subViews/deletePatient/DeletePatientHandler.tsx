import { useBreakpointValue } from '@chakra-ui/react';

import DeletePatientDrawer from 'components/app/dashboardPages/patients/subViews/deletePatient/DeletePatientDrawer';
import DeletePatientModal from 'components/app/dashboardPages/patients/subViews/deletePatient/DeletePatientModal';

const DeletePatientHandler = ({
	isOpen,
	onClose,
	patientId,
}: {
	isOpen: boolean;
	onClose: () => void;
	patientId: string;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<DeletePatientDrawer isOpen={isOpen} onClose={onClose} patientId={patientId} />
			) : (
				<DeletePatientModal isOpen={isOpen} onClose={onClose} patientId={patientId} />
			)}
		</>
	);
};
export default DeletePatientHandler;
