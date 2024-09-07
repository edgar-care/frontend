import { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import UpdateMedicalPersonalModalContent from 'components/app/dashboardPages/patients/modal/updatePatient/modal/UpdateMedicalPersonalModalContent';
import UpdateMedicalMedicalModalContent from 'components/app/dashboardPages/patients/modal/updatePatient/modal/UpdateMedicalMedicalModalContent';

import { useUpdatePatientMutation } from 'services/request/patients';

import type {
	PatientMedicalInfosHealthType,
	PatientMedicalInfosType,
	PatientType,
} from 'types/app/dashboard/patients/PatientType';

import MedicalIllustration from 'assets/illustrations/MedicalIllustration';

const UpdateMedicalHandler = ({
	isOpen,
	onClose,
	medicalInfos,
}: {
	isOpen: boolean;
	onClose: () => void;
	medicalInfos: PatientType;
}): JSX.Element => {
	const [triggerUpdatePatient] = useUpdatePatientMutation();

	const {
		handleSubmit: handleSubmitPersonal,
		formState: { errors: errorsPersonal },
		register: registerPersonal,
		control: controlPersonal,
		watch: watchPersonal,
	} = useForm<PatientMedicalInfosType>({
		mode: 'onChange',
		defaultValues: {
			name: medicalInfos.medicalInfos.name,
			firstname: medicalInfos.medicalInfos.firstname,
			birthdate: medicalInfos.medicalInfos.birthdate,
			sex: medicalInfos.medicalInfos.sex,
			height: medicalInfos.medicalInfos.height,
			weight: medicalInfos.medicalInfos.weight,
			primaryDoctorId: medicalInfos.medicalInfos.primaryDoctorId,
		},
	});
	const {
		handleSubmit: handleSubmitHealth,
		formState: { errors: errorsHealth },
		control: controlHealth,
		watch: watchHealth,
	} = useForm<PatientMedicalInfosHealthType>({
		mode: 'onChange',
		defaultValues: {
			onboardingStatus: medicalInfos.medicalInfos.onboardingStatus,
			medicalAntecedents: medicalInfos.medicalInfos.medicalAntecedents || [],
		},
	});

	const [step, setStep] = useState(0);

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmitPersonal((dataPersonal) => {
		const onFinalSubmit = handleSubmitHealth((dataHealth) => {
			triggerUpdatePatient({
				patientId: medicalInfos.id,
				medicalFolder: {
					name: dataPersonal.name,
					firstname: dataPersonal.firstname,
					birthdate: dataPersonal.birthdate,
					sex: dataPersonal.sex,
					height: dataPersonal.height,
					weight: dataPersonal.weight,
					primaryDoctorId: dataPersonal.primaryDoctorId,
					medicalAntecedents: dataHealth.medicalAntecedents.map((antecedent) => ({
						name: antecedent.name,
						id: antecedent.id,
						medicines: antecedent.medicines.map((medicine) => ({
							id: medicine.id,
							medicineId: medicine.medicineId,
							periods: medicine.periods,
							days: medicine.days,
							quantity: medicine.quantity,
						})),
						stillRelevant: antecedent.stillRelevant,
					})),
				},
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre dossier médical a bien été modifié', status: 'success' });
					setStep(0);
					onClose();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		});
		onFinalSubmit();
	});

	const onNextStep = handleSubmitPersonal(() => {
		setStep(1);
	});

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Mise à jour de vos informations médicales"
			headerSubtitle={
				step === 0
					? 'Modifier vos informations personnelles.'
					: 'Modifier vos antécédents médicaux et sujet de santé.'
			}
			headerIcon={MedicalIllustration}
			bodyContent={
				step === 0 ? (
					<UpdateMedicalPersonalModalContent
						register={registerPersonal}
						control={controlPersonal}
						errors={errorsPersonal}
						primaryDoctorId={watchPersonal('primaryDoctorId')}
					/>
				) : (
					<UpdateMedicalMedicalModalContent
						control={controlHealth}
						watch={watchHealth}
						errors={errorsHealth}
					/>
				)
			}
			footerPrimaryButton={
				<Button
					w="100%"
					variant="primary"
					onClick={() => {
						if (step === 0) void onNextStep();
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
						if (step === 0) onClose();
						else setStep(0);
					}}
				>
					{step === 0 ? 'Annuler' : 'Revenir en arrière'}
				</Button>
			}
		/>
	);
};

export default UpdateMedicalHandler;
