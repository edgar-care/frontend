import { Button, useToast } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';

import { useDeleteAPatientMutation } from 'services/request/patients';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

const DeletePatientHandler = ({
	isOpen,
	onClose,
	patientId,
}: {
	isOpen: boolean;
	onClose: () => void;
	patientId: string;
}): JSX.Element => {
	const [triggerDeleteAPatient] = useDeleteAPatientMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Supprimer le document"
			headerSubtitle="Vous êtes sur le point de supprimer le document. Si vous supprimez ce document, le patient ne pourra plus y accéder."
			headerIcon={DeleteCrossIllustration}
			footerPrimaryButton={
				<Button
					w="100%"
					variant="delete"
					type="submit"
					onClick={() => {
						triggerDeleteAPatient(patientId)
							.unwrap()
							.then(() => {
								toast({ title: 'Le patient a bien été supprimé', status: 'success' });
								onClose();
							})
							.catch(() => {
								toast({ title: 'Une erreur est survenue', status: 'error' });
							});
					}}
				>
					Supprimer le document
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
export default DeletePatientHandler;
