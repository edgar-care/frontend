import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import PatientAddDocumentModalContent from 'components/app/dashboardPages/patients/subViews/documents/modals/PatientAddDocumentModalContent';

import { useUploadAPatientDocumentMutation } from 'services/request/patients';

import CalendarIllustration from 'assets/illustrations/CalendarIllustration';

import type { UploadAPatientDocumentDTO } from 'store/types/patients.type';

import type { DocumentTypeType } from 'types/app/dashboard/patients/documents/DocumentTypeType';
import type { DocumentCategoryType } from 'types/app/dashboard/patients/documents/DocumentCategoryType';

const PatientAddDocumentHandler = ({
	isOpen,
	onClose,
	patientId,
}: {
	isOpen: boolean;
	onClose: () => void;
	patientId: string;
}): JSX.Element => {
	const [triggerUploadAPatientDocument] = useUploadAPatientDocumentMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<UploadAPatientDocumentDTO>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		if (data.document[0].size > 15728640) toast({ title: 'Le fichier ne doit pas dépasser 15Mo', status: 'error' });
		else {
			const formData = new FormData();
			formData.append('document', data.document[0]);
			formData.append('documentType', data.documentType as DocumentTypeType);
			formData.append('category', data.category as DocumentCategoryType);
			formData.append('isFavorite', 'false');
			formData.append('patient_id', patientId);

			triggerUploadAPatientDocument(formData)
				.unwrap()
				.then(() => {
					toast({ title: 'Votre document a été ajouté', status: 'success' });
					onClose();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	});

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Ajouter un document"
			headerSubtitle="Sélectionner le document que vous voulez ajouter à l’espace du patient."
			headerIcon={CalendarIllustration}
			bodyContent={<PatientAddDocumentModalContent register={register} errors={errors} />}
			footerPrimaryButton={
				<Button w="100%" type="submit" onClick={onSubmit}>
					Ajouter le document
				</Button>
			}
			footerSecondaryButton={
				<Button variant="secondary" w="100%" onClick={onClose}>
					Annuler
				</Button>
			}
		/>
	);
};

export default PatientAddDocumentHandler;
