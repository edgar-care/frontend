import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import AddTreatmentModalContent from 'components/dashboardPages/treatments/AddTreatmentModalContent';

import type { HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';
import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const AddTreatmentHandler = ({
	isOpen,
	onClose,
	onChange,
	treatments,
	hasHealthIssueSearch = false,
	healthIssues = [],
}: {
	isOpen: boolean;
	onClose: () => void;
	onChange: (event: unknown) => void;
	treatments: TreatmentType[];
	hasHealthIssueSearch?: boolean;
	healthIssues?: HealthIssuesType[];
}): JSX.Element => {
	const {
		handleSubmit,
		formState: { errors },
		control,
		watch,
		reset,
	} = useForm<TreatmentType>({ mode: 'onChange', defaultValues: { medicines: [] } });

	const onCloseAction = () => {
		onClose();
		reset();
	};

	const onSubmit = handleSubmit((data) => {
		onChange([...treatments, data]);
		onCloseAction();
	});

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onCloseAction}
			size="3xl"
			headerTitle="Ajouter un sujet de santé"
			headerSubtitle="Renseigner les informations de votre sujet de santé."
			headerIcon={AddHealthIssueIllustration}
			bodyContent={
				<AddTreatmentModalContent
					hasHealthIssueSearch={hasHealthIssueSearch}
					healthIssues={healthIssues}
					control={control}
					errors={errors}
					watch={watch}
				/>
			}
			footerPrimaryButton={
				<Button w="100%" onClick={onSubmit} id="edgar-onboardingMedicalPage-addHealthIssue-validate-button">
					Ajouter
				</Button>
			}
			footerSecondaryButton={
				<Button
					variant="secondary"
					w="100%"
					onClick={onCloseAction}
					id="edgar-onboardingMedicalPage-addHealthIssue-cancel-button"
				>
					Annuler
				</Button>
			}
		/>
	);
};
export default AddTreatmentHandler;
