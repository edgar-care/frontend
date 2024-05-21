import { useBreakpointValue } from '@chakra-ui/react';

import PatientAddDocumentDrawer from 'components/app/dashboardPages/patients/subViews/documents/modals/PatientAddDocumentDrawer';
import PatientAddDocumentModal from 'components/app/dashboardPages/patients/subViews/documents/modals/PatientAddDocumentModal';

const PatientAddDocumentHandler = ({
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
				<PatientAddDocumentDrawer isOpen={isOpen} onClose={onClose} patientId={patientId} />
			) : (
				<PatientAddDocumentModal isOpen={isOpen} onClose={onClose} patientId={patientId} />
			)}
		</>
	);
};

export default PatientAddDocumentHandler;
