import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import SelectMedicalAntecedentsContent from 'components/app/dashboardPages/patients/modal/SelectMedicalAntecedentsContent';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

import AddMedicalAntecedentsIllustration from 'assets/illustrations/AddMedicalAntecedentsIllustration';

const SelectMedicalAntecedentsHandler = ({
	isOpen,
	onClose,
	onChange,
	medicalAntecedents,
}: {
	isOpen: boolean;
	onClose: () => void;
	onChange: (event: unknown) => void;
	medicalAntecedents: PatientMedicalAntecedentType[];
}): JSX.Element => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		watch,
		reset,
	} = useForm<PatientMedicalAntecedentType>({ mode: 'onChange', defaultValues: { medicines: [] } });

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		if (medicalAntecedents.some((medicalAntecedent) => medicalAntecedent.name === data.name)) {
			toast({
				title: 'Ce sujet de santé a déjà été ajouté',
				status: 'error',
			});
			return;
		}
		if (!data.medicines.every((medicine) => medicine.days.length > 0 && medicine.periods.length > 0)) {
			toast({
				title: 'Veuillez sélectionner au moins un jour et une période pour les traitements',
				status: 'error',
			});
			return;
		}
		onChange([...medicalAntecedents, data]);
		onClose();
		reset();
		toast({ title: 'Votre sujet de santé a été ajouté', status: 'success' });
	});

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Ajouter un sujet de santé"
			headerSubtitle="Renseigner les informations du sujet de santé."
			headerIcon={AddMedicalAntecedentsIllustration}
			bodyContent={
				<SelectMedicalAntecedentsContent
					onSubmit={onSubmit}
					register={register}
					control={control}
					errors={errors}
					watch={watch}
				/>
			}
			footerPrimaryButton={
				<Button w="100%" onClick={onSubmit}>
					Ajouter
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
export default SelectMedicalAntecedentsHandler;
