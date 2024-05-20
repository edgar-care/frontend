import { useBreakpointValue } from '@chakra-ui/react';

import AddPatientModal from 'components/app/dashboardPages/patients/modal/AddPatientModal';
import AddPatientDrawer from 'components/app/dashboardPages/patients/modal/AddPatientDrawer';

const AddPatientHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<AddPatientDrawer isOpen={isOpen} onClose={onClose} />
			) : (
				<AddPatientModal isOpen={isOpen} onClose={onClose} />
			)}
		</>
	);
};

export default AddPatientHandler;
