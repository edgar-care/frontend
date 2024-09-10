import { Button, useToast } from '@chakra-ui/react';

import { useDeleteDocumentMutation } from 'services/request/documents';

const DeleteDocumentFooterPrimaryButton = ({
	onClose,
	documentId,
}: {
	onClose: () => void;
	documentId: string;
}): JSX.Element => {
	const [triggerDeleteDocument] = useDeleteDocumentMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<Button
			size="customMd"
			variant="delete"
			w="100%"
			onClick={() =>
				triggerDeleteDocument({ id: documentId })
					.unwrap()
					.then(() => {
						toast({ title: 'Votre rendez-vous a bien été supprimé', status: 'success' });
						onClose();
					})
					.catch(() => {
						toast({ title: 'Une erreur est survenue', status: 'error' });
					})
			}
		>
			Supprimer le document
		</Button>
	);
};

export default DeleteDocumentFooterPrimaryButton;
