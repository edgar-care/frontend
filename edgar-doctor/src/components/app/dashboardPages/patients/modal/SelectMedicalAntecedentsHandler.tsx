import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import SelectMedicalAntecedentsDrawer from 'components/app/dashboardPages/patients/modal/SelectMedicalAntecedentsDrawer';
import SelectMedicalAntecedentsModal from 'components/app/dashboardPages/patients/modal/SelectMedicalAntecedentsModal';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

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
	const isMobile = useBreakpointValue({ base: true, md: false });

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
		<>
			{isMobile ? (
				<SelectMedicalAntecedentsDrawer
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
					}}
					onSubmit={onSubmit}
					register={register}
					control={control}
					errors={errors}
					watch={watch}
				/>
			) : (
				<SelectMedicalAntecedentsModal
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
					}}
					onSubmit={onSubmit}
					register={register}
					control={control}
					errors={errors}
					watch={watch}
				/>
			)}
		</>
	);
};
export default SelectMedicalAntecedentsHandler;
