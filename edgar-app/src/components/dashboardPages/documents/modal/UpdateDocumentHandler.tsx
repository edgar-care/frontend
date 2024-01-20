import { useBreakpointValue } from '@chakra-ui/react';

import UpdateDocumentModal from 'components/dashboardPages/documents/modal/UpdateDocumentModal';
import UpdateDocumentDrawer from 'components/dashboardPages/documents/modal/UpdateDocumentDrawer';

const UpdateDocumentHandler = ({
	isOpen,
	onClose,
	documentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	documentId: string;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<UpdateDocumentDrawer isOpen={isOpen} onClose={onClose} documentId={documentId} />
			) : (
				<UpdateDocumentModal isOpen={isOpen} onClose={onClose} documentId={documentId} />
			)}
		</>
	);
};

export default UpdateDocumentHandler;
