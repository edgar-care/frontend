import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import SelectHealthIssueContent from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueContent';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const SelectHealthIssueHandler = ({
	isOpen,
	onClose,
	onChange,
	healthIssues,
}: {
	isOpen: boolean;
	onClose: () => void;
	onChange: (event: unknown) => void;
	healthIssues: HealthIssuesType[];
}): JSX.Element => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		watch,
		reset,
	} = useForm<HealthIssuesType>({ mode: 'onChange', defaultValues: { medicines: [] } });

	const toast = useToast({ duration: 3000, isClosable: true });

	const onCloseAction = () => {
		onClose();
		reset();
	};

	const onSubmit = handleSubmit((data) => {
		if (healthIssues.some((healthIssue) => healthIssue.name === data.name)) {
			toast({
				title: 'Ce sujet de santé a déjà été ajouté',
				status: 'error',
			});
			return;
		}
		if (!data.medicines.every((medicine) => medicine.day.length > 0 && medicine.period.length > 0)) {
			toast({
				title: 'Veuillez sélectionner au moins un jour et une période pour vos traitements',
				status: 'error',
			});
			return;
		}
		onChange([...healthIssues, data]);
		onCloseAction();
		toast({ title: 'Votre sujet de santé a été ajouté', status: 'success' });
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
				<SelectHealthIssueContent
					onSubmit={onSubmit}
					register={register}
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
export default SelectHealthIssueHandler;
