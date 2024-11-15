import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import AddTreatmentDrawer from 'components/dashboardPages/treatments/modal/AddTreatmentDrawer';
import AddTreatmentModal from 'components/dashboardPages/treatments/modal/AddTreatmentModal';

import { TreatmentType } from 'types/dashboard/treatments/TreatmentType';
import { useAddTreatmentAndHealthIssueMutation, useAddTreatmentMutation } from 'services/request/treatments';

const AddTreatmentHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [triggerAddTreatmentAndHealthIssueMutation] = useAddTreatmentAndHealthIssueMutation();
	const [triggerAddTreatmentMutation] = useAddTreatmentMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		watch,
		reset,
	} = useForm<TreatmentType>({ mode: 'onChange', defaultValues: { treatments: [] } });
	const isMobile = useBreakpointValue({ base: true, smd: false });

	const toast = useToast({ duration: 3000, isClosable: true });

	const existing = watch('alreadyExist');

	const onSubmit = handleSubmit((data) => {
		if (
			!data.treatments.every(
				(medicine) =>
					medicine.day.length > 0 && medicine.period.length > 0 && parseInt(medicine.quantity, 10) > 0,
			)
		) {
			toast({
				title: 'Veuillez sélectionner au moins un jour, une période et une quantité supérieure à 0 pour vos traitements',
				status: 'error',
			});
			return;
		}
		if (data.name && !existing) {
			triggerAddTreatmentAndHealthIssueMutation({
				name: data.name,
				stillRelevant: data.stillRelevant,
				treatments: data.treatments.map((treatment) => ({
					period: treatment.period,
					day: treatment.day,
					quantity: parseInt(treatment.quantity, 10),
					medicineId: treatment.medicineId,
				})),
			})
				.unwrap()
				.then(() => {
					onClose();
					reset();
					toast({ title: 'Votre traitement à été ajouté', status: 'success' });
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
		if (data.diseaseId && existing) {
			triggerAddTreatmentMutation({
				diseaseId: data.diseaseId,
				stillRelevant: data.stillRelevant,
				treatments: data.treatments.map((treatment) => ({
					period: treatment.period,
					day: treatment.day,
					quantity: parseInt(treatment.quantity, 10),
					medicineId: treatment.medicineId,
				})),
			})
				.unwrap()
				.then(() => {
					onClose();
					reset();
					toast({ title: 'Votre traitement à été ajouté', status: 'success' });
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	});

	return (
		<>
			{isMobile ? (
				<AddTreatmentDrawer
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
				<AddTreatmentModal
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

export default AddTreatmentHandler;
