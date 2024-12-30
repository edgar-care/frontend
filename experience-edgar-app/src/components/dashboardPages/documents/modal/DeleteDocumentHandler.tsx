import { Button } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';
import DeleteDocumentFooterPrimaryButton from 'components/dashboardPages/documents/modal/DeleteDocumentFooterPrimaryButton';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

const DeleteDocumentHandler = ({
	isOpen,
	onClose,
	documentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	documentId: string;
}): JSX.Element => (
	<ModalHandler
		isOpen={isOpen}
		onClose={onClose}
		size="3xl"
		headerTitle="Supprimer votre document"
		headerSubtitle="Vous êtes sur le point de supprimer votre document. Si vous supprimer ce document, vous ne pourrez plus y accéder."
		headerIcon={DeleteCrossIllustration}
		footerPrimaryButton={<DeleteDocumentFooterPrimaryButton documentId={documentId} onClose={onClose} />}
		footerSecondaryButton={
			<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
				Annuler
			</Button>
		}
	/>
);

export default DeleteDocumentHandler;
