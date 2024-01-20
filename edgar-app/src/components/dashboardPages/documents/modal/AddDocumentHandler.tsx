import { useBreakpointValue } from '@chakra-ui/react';

import AddDocumentModal from 'components/dashboardPages/documents/modal/AddDocumentModal';
import AddDocumentDrawer from 'components/dashboardPages/documents/modal/AddDocumentDrawer';

const AddDocumentHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<AddDocumentDrawer isOpen={isOpen} onClose={onClose} />
			) : (
				<AddDocumentModal isOpen={isOpen} onClose={onClose} />
			)}
		</>
	);
};

export default AddDocumentHandler;
