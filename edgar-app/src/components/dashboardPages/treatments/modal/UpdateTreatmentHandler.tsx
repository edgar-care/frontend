import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import UpdateTreatmentDrawer from 'components/dashboardPages/treatments/modal/UpdateTreatmentDrawer';
import UpdateTreatmentModal from 'components/dashboardPages/treatments/modal/UpdateTreatmentModal';

import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

import { useUpdateTreatmentMutation } from 'services/request/treatments';
import { useAddTreatmentMutation } from 'services/request/treatments';


const UpdateTreatmentHandler = ({
	isOpen,
	onClose,
	antecedent,
}: {
	isOpen: boolean;
	onClose: () => void;
	antecedent: PatientMedicalAntecedentType | undefined;
}): JSX.Element => {
	const [triggerUpdateTreatmentMutation] = useUpdateTreatmentMutation();
	const [triggerAddTreatmentMutation] = useAddTreatmentMutation();
	const { handleSubmit, control, reset, watch, formState: { errors } } = useForm<PatientMedicalAntecedentType>({
		mode: 'onChange',
		defaultValues: antecedent,
	});
	const isMobile = useBreakpointValue({ base: true, smd: false });

	const toast = useToast({ duration: 3000, isClosable: true });

	const stillRelevant = watch('stillRelevant');

	const onSubmit = handleSubmit((data) => {
		console.log(data);
		if (!data.medicines.every((medicine) => medicine.days.length > 0 && medicine.periods.length > 0)) {
			toast({
				title: 'Veuillez sélectionner au moins un jour et une période pour vos traitements',
				status: 'error',
			});
		}
		if (antecedent?.stillRelevant !== stillRelevant) {
			triggerAddTreatmentMutation({
				diseaseId: data.id,
				stillRelevant: data.stillRelevant,
				treatments: data.medicines.map((medicine) => ({
					period: medicine.periods,
					day: medicine.days,
					quantity: medicine.quantity,
					medicineId: medicine.medicineId,
				}))
			})
		}
		if (data.medicines) {
			triggerUpdateTreatmentMutation({
				treatments: data.medicines.map((medicine) => ({
					id: medicine.id,
					medicineId: medicine.medicineId,
					period: medicine.periods,
					day: medicine.days,
					quantity: medicine.quantity,
				})),
			})
				.unwrap()
				.then(() => {
					onClose();
					reset();
					toast({ title: 'Votre tratiement à été mis à jour', status: 'success' });
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	});

	return (
		<>
			{isMobile ? (
				<UpdateTreatmentDrawer
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
					}}
					onSubmit={onSubmit}
					control={control}
					watch={watch}
					errors={errors}
				/>
			) : (
				<UpdateTreatmentModal
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
					}}
					onSubmit={onSubmit}
					control={control}
					watch={watch}
					errors={errors}
				/>
			)}
		</>
	);
};

export default UpdateTreatmentHandler;
