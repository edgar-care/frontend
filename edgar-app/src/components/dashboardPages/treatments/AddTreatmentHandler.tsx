import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';

import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';
import AddTreatmentModalContent from 'components/dashboardPages/treatments/AddTreatmentModalContent';

const AddTreatmentHandler = ({
	isOpen,
	onClose,
	onChange,
	medicalAntecedentId,
	treatments,
}: {
	isOpen: boolean;
	onClose: () => void;
	onChange: (event: unknown) => void;
	medicalAntecedentId?: string;
	treatments: TreatmentType[];
}): JSX.Element => {
	const {
		handleSubmit,
		formState: { errors },
		control,
		watch,
		reset,
	} = useForm<TreatmentType>({ mode: 'onChange', defaultValues: { medicalAntecedentId, medicines: [] } });

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
			bodyContent={<AddTreatmentModalContent control={control} errors={errors} watch={watch} />}
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
