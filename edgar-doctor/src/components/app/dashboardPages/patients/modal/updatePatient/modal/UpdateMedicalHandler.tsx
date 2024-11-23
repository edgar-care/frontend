import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import UpdateMedicalPersonalModalContent from 'components/app/dashboardPages/patients/modal/updatePatient/modal/UpdateMedicalPersonalModalContent';

import { useUpdatePatientMutation } from 'services/request/patients';

import type { PatientMedicalInfosType, PatientType } from 'types/app/dashboard/patients/PatientType';

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
		handleSubmit,
		formState: { errors },
		register,
		control,
		watch,
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

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((dataPersonal) => {
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
			},
		})
			.unwrap()
			.then(() => {
				toast({ title: 'Votre dossier médical a bien été modifié', status: 'success' });
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
			headerTitle="Mise à jour des informations médicales du patient"
			headerSubtitle={'Modifier les informations personnelles du patient.'}
			headerIcon={MedicalIllustration}
			bodyContent={
				<UpdateMedicalPersonalModalContent
					register={register}
					control={control}
					errors={errors}
					primaryDoctorId={watch('primaryDoctorId')}
				/>
			}
			footerPrimaryButton={
				<Button w="100%" variant="primary" onClick={onSubmit} type="submit">
					Confirmer
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

export default UpdateMedicalHandler;
