import { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import AddPatientModalContent from 'components/app/dashboardPages/patients/modal/AddPatientModalContent';
import AddPatientModalMedicalAntecedents from 'components/app/dashboardPages/patients/modal/AddPatientModalMedicalAntecedents';

import { useAddPatientMutation } from 'services/request/patients';

import AddPatientIllustration from 'assets/illustrations/AddPatientIllustration';

import type { AddPatientDTO } from 'store/types/patients.type';

const AddPatientHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [triggerAddPatient] = useAddPatientMutation();

	const [step, setStep] = useState(0);
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		reset,
		watch,
	} = useForm<AddPatientDTO>({
		mode: 'onChange',
		defaultValues: {
			medicalFolder: {
				medicalAntecedents: [],
			},
		},
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		// TODO: clean this code
		console.log(data.medicalFolder.birthdate);
		if (
			!data.email ||
			!data.medicalFolder.name ||
			!data.medicalFolder.firstname ||
			!data.medicalFolder.birthdate ||
			!data.medicalFolder.sex ||
			!data.medicalFolder.height ||
			!data.medicalFolder.weight ||
			!data.medicalFolder.primaryDoctorId
		) {
			toast({ title: 'Veuillez remplir tous les champs', status: 'error' });
			return;
		}
		triggerAddPatient({
			email: data.email,
			medicalFolder: data.medicalFolder,
		})
			.unwrap()
			.then(() => {
				toast({ title: 'La patient a bien été ajouté', status: 'success' });
				setStep(0);
				reset();
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Ajout des informations médicales du patient"
			headerSubtitle="Ajouter les informations personnelles."
			headerIcon={AddPatientIllustration}
			bodyContent={
				step === 0 ? (
					<AddPatientModalContent register={register} control={control} errors={errors} />
				) : (
					<AddPatientModalMedicalAntecedents
						control={control}
						errors={errors}
						medicalAntecedents={watch('medicalFolder.medicalAntecedents')}
					/>
				)
			}
			footerPrimaryButton={
				<Button
					w="100%"
					onClick={() => {
						if (step === 0) setStep(1);
						else void onSubmit();
					}}
					type={step === 0 ? 'button' : 'submit'}
				>
					{step === 0 ? 'Continuer' : 'Confirmer'}
				</Button>
			}
			footerSecondaryButton={
				<Button
					variant="secondary"
					w="100%"
					onClick={() => {
						if (step === 0) {
							onClose();
							reset();
						} else setStep(0);
					}}
				>
					{step === 0 ? 'Annuler' : 'Revenir en arrière'}
				</Button>
			}
		/>
	);
};

export default AddPatientHandler;
