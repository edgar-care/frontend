import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import SelectMedicalAntecedentsDrawer from 'components/app/dashboardPages/patients/modal/SelectMedicalAntecedentsDrawer';
import SelectMedicalAntecedentsModal from 'components/app/dashboardPages/patients/modal/SelectMedicalAntecedentsModal';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

const SelectMedicalAntecedentsHandler = ({
	isOpen,
	onClose,
	onChange,
	healthIssues,
}: {
	isOpen: boolean;
	onClose: () => void;
	onChange: (event: unknown) => void;
	healthIssues: PatientMedicalAntecedentType[];
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
		if (healthIssues.some((healthIssue) => healthIssue.name === data.name)) {
			toast({
				title: 'Ce sujet de santé a déjà été ajouté',
				status: 'error',
			});
			return;
		}
		if (!data.medicines.every((medicine) => medicine.day.length > 0 && medicine.period.length > 0)) {
			toast({
				title: 'Veuillez sélectionner au moins un jour et une période pour les traitements',
				status: 'error',
			});
			return;
		}
		onChange([...healthIssues, data]);
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
