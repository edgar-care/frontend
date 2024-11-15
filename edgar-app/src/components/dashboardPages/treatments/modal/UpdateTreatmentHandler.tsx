import { useEffect } from 'react';
import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import UpdateTreatmentDrawer from 'components/dashboardPages/treatments/modal/UpdateTreatmentDrawer';
import UpdateTreatmentModal from 'components/dashboardPages/treatments/modal/UpdateTreatmentModal';

import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

import {
	useUpdateTreatmentMutation,
	useAddTreatmentMutation,
	useDeleteTreatmentMutation,
} from 'services/request/treatments';

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
	const [triggerDeleteTreatmentMutation] = useDeleteTreatmentMutation();

	const {
		handleSubmit,
		control,
		reset,
		watch,
		formState: { errors },
	} = useForm<PatientMedicalAntecedentType>({
		mode: 'onChange',
		defaultValues: antecedent,
	});
	const isMobile = useBreakpointValue({ base: true, smd: false });

	const toast = useToast({ duration: 3000, isClosable: true });

	const addedMedicines = watch('medicines') || [];

	const onSubmit = handleSubmit((data) => {
		if (
			!data.medicines.every(
				(medicine) => medicine.days.length > 0 && medicine.periods.length > 0 && medicine.quantity > 0,
			)
		) {
			toast({
				title: 'Veuillez sélectionner au moins un jour, une période et une quantité supérieure à 0 pour vos traitements',
				status: 'error',
			});
		}

		const treatmentToAdd = data.medicines.filter((medicine) => !medicine.id);
		const treatmentToUpdate = data.medicines.filter((medicine) => medicine.id);
		const treatmentToDelete =
			antecedent?.medicines.filter((medicine) => !data.medicines.find((m) => m.id === medicine.id)) || [];

		if (treatmentToAdd.length > 0) {
			console.log('frghjkioltgyhujk', treatmentToAdd);
			triggerAddTreatmentMutation({
				diseaseId: data.id,
				stillRelevant: data.stillRelevant,
				treatments: treatmentToAdd.map((medicine) => ({
					medicineId: medicine.medicineId,
					period: medicine.periods,
					day: medicine.days,
					quantity: medicine.quantity,
				})),
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre traitement à été ajouté', status: 'success' });
					onClose();
					reset();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}

		if (treatmentToUpdate.length > 0) {
			triggerUpdateTreatmentMutation({
				treatments: treatmentToUpdate.map((medicine) => ({
					id: medicine.id || '',
					medicineId: medicine.medicineId,
					period: medicine.periods,
					day: medicine.days,
					quantity: medicine.quantity,
				})),
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre traitement à été mis à jour', status: 'success' });
					onClose();
					reset();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}

		if (treatmentToDelete.length > 0) {
			console.log(treatmentToDelete);
			Promise.all(
				treatmentToDelete.map(async (treatment) => {
					const res = await triggerDeleteTreatmentMutation(treatment.id || '');
					if ('error' in res) return false;
					return true;
				}),
			).then((res) => {
				if (res.some((response) => !response)) toast({ title: 'Une erreur est survenue', status: 'error' });
				else {
					toast({ title: 'Votre traitement à été supprimé', status: 'success' });
					onClose();
					reset();
				}
			});
		}
	});

	useEffect(() => {
		reset(antecedent);
	}, [antecedent]);

	return (
		<>
			{isMobile ? (
				<UpdateTreatmentDrawer
					addedMedicines={addedMedicines}
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
					}}
					onSubmit={onSubmit}
					control={control}
					errors={errors}
				/>
			) : (
				<UpdateTreatmentModal
					addedMedicines={addedMedicines}
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
					}}
					onSubmit={onSubmit}
					control={control}
					errors={errors}
				/>
			)}
		</>
	);
};

export default UpdateTreatmentHandler;
