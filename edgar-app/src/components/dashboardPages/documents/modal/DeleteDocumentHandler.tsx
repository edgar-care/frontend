import { useBreakpointValue } from '@chakra-ui/react';

import DeleteDocumentModal from 'components/dashboardPages/documents/modal/DeleteDocumentModal';
import DeleteDocumentDrawer from 'components/dashboardPages/documents/modal/DeleteDocumentDrawer';

const DeleteDocumentHandler = ({
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
				<DeleteDocumentDrawer isOpen={isOpen} onClose={onClose} documentId={documentId} />
			) : (
				<DeleteDocumentModal isOpen={isOpen} onClose={onClose} documentId={documentId} />
			)}
		</>
	);
};

export default DeleteDocumentHandler;
