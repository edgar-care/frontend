import { useBreakpointValue } from '@chakra-ui/react';

import SelectDoctorModal from 'components/dashboardPages/chat/modals/SelectDoctorModal';
import SelectDoctorDrawer from 'components/dashboardPages/chat/modals/SelectDoctorDrawer';

const SelectDoctorHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<SelectDoctorDrawer isOpen={isOpen} onClose={onClose} />
			) : (
				<SelectDoctorModal isOpen={isOpen} onClose={onClose} />
			)}
		</>
	);
};
export default SelectDoctorHandler;
