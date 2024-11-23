import { useState } from 'react';
import { Button, useToast, useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import UpdateDocumentModalContent from 'components/dashboardPages/documents/modal/UpdateDocumentModalContent';

import { useUpdateDocumentMutation } from 'services/request/documents';

import handleDocumentExtension from 'utils/app/dashboard/documents/handleDocumentExtension';
import getDocumentExtension from 'utils/app/dashboard/documents/getDocumentExtension';

import type { UpdateDocumentType } from 'types/dashboard/documents/UpdateDocumentType';
import type { DocumentType } from 'types/dashboard/documents/DocumentType';

import UpdateDocumentIllustration from 'assets/illustrations/UpdateDocumentIllustration';

const UpdateDocumentHandler = ({
	isOpen,
	onClose,
	document,
}: {
	isOpen: boolean;
	onClose: () => void;
	document: DocumentType;
}): JSX.Element => {
	const { isOpen: isConfirmationOpen, onOpen: openConfirmation, onClose: closeConfirmation } = useDisclosure();
	const [triggerUpdateDocument] = useUpdateDocumentMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<UpdateDocumentType>({ mode: 'onChange' });
	const toast = useToast({ duration: 3000, isClosable: true });
	const [formData, setFormData] = useState<UpdateDocumentType | null>(null);

	const onCloseAction = () => {
		reset();
		onClose();
	};

	const onSubmit = handleSubmit((data) => {
		const currentExtension = getDocumentExtension(document.name);
		const newDocumentName = data.documentName.includes('.')
			? data.documentName
			: handleDocumentExtension(data.documentName, currentExtension);
		if (data.documentName.includes('.')) {
			setFormData(data);
			openConfirmation();
		} else {
			triggerUpdateDocument({
				id: document.id,
				documentName: newDocumentName,
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre document a été mis à jour', status: 'success' });
					onCloseAction();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	});

	const confirmSubmit = () => {
		if (formData) {
			const currentExtension = getDocumentExtension(document.name);
			const newDocumentName = formData.documentName.includes('.')
				? formData.documentName
				: handleDocumentExtension(formData.documentName, currentExtension);

			triggerUpdateDocument({
				id: document.id,
				documentName: newDocumentName,
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre document a été mis à jour', status: 'success' });
					onCloseAction();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
			closeConfirmation();
		}
	};

	return (
		<>
			<ModalHandler
				isOpen={isOpen}
				onClose={onCloseAction}
				size="3xl"
				headerTitle="Modifier votre document"
				headerSubtitle="Modifier le nom de votre document."
				headerIcon={UpdateDocumentIllustration}
				bodyContent={
					<UpdateDocumentModalContent placeholder={document.name} errors={errors} register={register} />
				}
				footerPrimaryButton={
					<Button size="customMd" w="100%" onClick={onSubmit}>
						Modifier le document
					</Button>
				}
				footerSecondaryButton={
					<Button size="customMd" variant="secondary" w="100%" onClick={onCloseAction}>
						Annuler
					</Button>
				}
			/>
			<ModalHandler
				isOpen={isConfirmationOpen}
				onClose={closeConfirmation}
				size="md"
				headerTitle="Confirmation requise"
				headerSubtitle="Le nom de votre document contient un point ('.'). Voulez-vous vraiment continuer ?"
				headerIcon={UpdateDocumentIllustration}
				footerPrimaryButton={
					<Button size="customMd" w="100%" onClick={confirmSubmit}>
						Confirmer
					</Button>
				}
				footerSecondaryButton={
					<Button size="customMd" variant="secondary" w="100%" onClick={closeConfirmation}>
						Annuler
					</Button>
				}
			/>
		</>
	);
};

export default UpdateDocumentHandler;
