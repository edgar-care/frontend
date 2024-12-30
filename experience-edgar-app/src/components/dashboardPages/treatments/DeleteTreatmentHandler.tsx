import { Button, useToast } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';

import { useDeleteTreatmentMutation } from 'services/request/treatments';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

const DeleteTreatmentHandler = ({
	isOpen,
	onClose,
	treatmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	treatmentId: string;
}): JSX.Element => {
	const [triggerDeleteTreatment] = useDeleteTreatmentMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = () => {
		triggerDeleteTreatment(treatmentId)
			.unwrap()
			.then(() => {
				toast({ title: 'Votre traitement a bien été supprimé', status: 'success' });
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	};

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Supprimer votre traitement"
			headerSubtitle="Vous êtes sur le point de supprimer votre traitement. Si vous supprimez ce traitement, vous ne pourrez plus le consulter."
			headerIcon={DeleteCrossIllustration}
			footerPrimaryButton={
				<Button variant="delete" w="100%" onClick={onSubmit}>
					Oui, supprimer le traitement
				</Button>
			}
			footerSecondaryButton={
				<Button variant="secondary" w="100%" onClick={onClose}>
					Non, garder le traitement
				</Button>
			}
		/>
	);
};
export default DeleteTreatmentHandler;
