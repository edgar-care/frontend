import { Button } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';

import type { HealthIssuesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

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
	onClick: () => void;
}): JSX.Element => (
	<ModalHandler
		isOpen={isOpen}
		onClose={onClose}
		size="3xl"
		headerTitle="Supprimer un sujet de santé"
		headerSubtitle={`Vous êtes sur le point de supprimer le sujet de santé: ${healthIssue.name}. Si vous supprimez ce sujet de santé, vous ne pourrez plus le consulter.`}
		headerIcon={DeleteCrossIllustration}
		footerPrimaryButton={
			<Button variant="delete" w="100%" onClick={onClick}>
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
export default DeleteHealthIssueHandler;
