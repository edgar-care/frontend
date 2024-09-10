import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import AddDocumentModalContent from 'components/dashboardPages/documents/modal/AddDocumentModalContent';

import type { AddDocumentType } from 'types/dashboard/documents/AddDocumentType';
import type { DocumentTypeType } from 'types/dashboard/documents/DocumentTypeType';
import type { DocumentCategoryType } from 'types/dashboard/documents/DocumentCategoryType';

import { useAddDocumentMutation } from 'services/request/documents';

import AddDocumentIllustration from 'assets/illustrations/AddDocumentIllustration';

const AddDocumentHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [triggerAddDocument] = useAddDocumentMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<AddDocumentType>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onCloseAction = () => {
		reset();
		onClose();
	};

	const onSubmit = handleSubmit((data) => {
		if (data.document[0].size > 15728640) toast({ title: 'Le fichier ne doit pas dépasser 15Mo', status: 'error' });
		else {
			const formData = new FormData();
			formData.append('document', data.document[0]);
			formData.append('documentType', data.documentType as DocumentTypeType);
			formData.append('category', data.category as DocumentCategoryType);
			formData.append('isFavorite', data.isFavorite ? 'true' : 'false');

			triggerAddDocument(formData)
				.unwrap()
				.then(() => {
					toast({ title: 'Votre document a été ajouté', status: 'success' });
					onCloseAction();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	});

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onCloseAction}
			size="3xl"
			headerTitle="Ajouter un document"
			headerSubtitle="Sélectionner le document que vous voulez ajouter à votre espace patient."
			headerIcon={AddDocumentIllustration}
			bodyContent={<AddDocumentModalContent register={register} errors={errors} />}
			footerPrimaryButton={
				<Button size="customMd" w="100%" onClick={onSubmit}>
					Ajouter le document
				</Button>
			}
			footerSecondaryButton={
				<Button size="customMd" variant="secondary" w="100%" onClick={onCloseAction}>
					Annuler
				</Button>
			}
		/>
	);
};

export default AddDocumentHandler;
