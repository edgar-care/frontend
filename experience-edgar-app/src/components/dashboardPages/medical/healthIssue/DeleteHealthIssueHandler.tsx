import { Button, useToast } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';

import { useDeleteHealthIssueMutation } from 'services/request/medical';

import type { HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

const DeleteHealthIssueHandler = ({
	isOpen,
	onClose,
	healthIssue,
	onClick,
}: {
	isOpen: boolean;
	onClose: () => void;
	healthIssue: HealthIssuesType;
	onClick?: () => void;
}): JSX.Element => {
	const [triggerDeleteHealthIssue] = useDeleteHealthIssueMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = () => {
		if (onClick) onClick();
		else {
			if (!healthIssue.id) {
				console.error('No health issue id');
				toast({ title: 'Une erreur est survenue', status: 'error' });
				return;
			}
			triggerDeleteHealthIssue(healthIssue.id)
				.unwrap()
				.then(() => {
					toast({ title: 'Votre sujet de santé a bien été supprimé', status: 'success' });
					onClose();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	};

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Supprimer un sujet de santé"
			headerSubtitle={`Vous êtes sur le point de supprimer votre sujet de santé: ${healthIssue.name}. Si vous supprimez ce sujet de santé, vous ne pourrez plus le consulter.`}
			headerIcon={DeleteCrossIllustration}
			footerPrimaryButton={
				<Button variant="delete" w="100%" onClick={onSubmit}>
					Oui, supprimer le sujet de santé
				</Button>
			}
			footerSecondaryButton={
				<Button variant="secondary" w="100%" onClick={onClose}>
					Non, garder le sujet de santé
				</Button>
			}
		/>
	);
};
export default DeleteHealthIssueHandler;
