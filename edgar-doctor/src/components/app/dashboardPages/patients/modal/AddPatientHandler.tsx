import { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import AddPatientModalContent from 'components/app/dashboardPages/patients/modal/AddPatientModalContent';
import AddPatientModalMedicalAntecedents from 'components/app/dashboardPages/patients/modal/AddPatientModalMedicalAntecedents';

import { useAddPatientMutation } from 'services/request/patients';

import type { AddPatientDTO } from 'store/types/patients.type';

import type { PatientMedicalHealthInfosType } from 'types/app/dashboard/patients/PatientType';

import AddPatientIllustration from 'assets/illustrations/AddPatientIllustration';

const AddPatientHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [triggerAddPatient] = useAddPatientMutation();

	const [step, setStep] = useState(0);
	const {
		handleSubmit: handleSubmitFirstStep,
		formState: { errors: errorsFirstStep },
		register: registerFirstStep,
		control: controlFirstStep,
		reset: resetFirstStep,
	} = useForm<AddPatientDTO>({
		mode: 'onChange',
		defaultValues: {
			medicalInfo: {
				birthdate: 0,
				healthIssues: [],
			},
		},
	});

	const {
		handleSubmit,
		formState: { errors },
		control,
		reset,
		watch,
	} = useForm<PatientMedicalHealthInfosType>({
		mode: 'onChange',
		defaultValues: {
			healthIssues: [],
		},
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmitFirstStep((dataFirstStep) => {
		const onFinalSubmit = handleSubmit((data) => {
			triggerAddPatient({
				email: dataFirstStep.email,
				medicalInfo: { ...dataFirstStep.medicalInfo, healthIssues: data.healthIssues },
			})
				.unwrap()
				.then(() => {
					toast({ title: 'La patient a bien été ajouté', status: 'success' });
					setStep(0);
					reset();
					resetFirstStep();
					onClose();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		});
		onFinalSubmit();
	});

	const onNext = handleSubmitFirstStep(() => {
		setStep(1);
	});

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Ajout les informations médicales du patient"
			headerSubtitle={
				step === 0 ? 'Ajouter les informations personnelles.' : 'Ajouter les informations médicales.'
			}
			headerIcon={AddPatientIllustration}
			bodyContent={
				step === 0 ? (
					<AddPatientModalContent
						register={registerFirstStep}
						control={controlFirstStep}
						errors={errorsFirstStep}
					/>
				) : (
					<AddPatientModalMedicalAntecedents
						control={control}
						errors={errors}
						healthIssues={watch('healthIssues')}
					/>
				)
			}
			footerPrimaryButton={
				<Button
					w="100%"
					onClick={() => {
						if (step === 0) onNext();
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
							resetFirstStep();
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
