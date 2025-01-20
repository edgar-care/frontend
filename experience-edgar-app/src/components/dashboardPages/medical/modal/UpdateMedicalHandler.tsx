import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import UpdateMedicalPersonalModalContent from 'components/dashboardPages/medical/modal/UpdateMedicalPersonalModalContent';

import { useUpdatePatientMedicalFolderMutation } from 'services/request/medical';

import type { UpdatePatientMedicalPersonalType } from 'types/dashboard/medical/form/UpdatePatientMedicalType';
import type { OnboardingInfos } from 'types/onboarding/OnboardingInfos';

import MedicalIllustration from 'assets/illustrations/MedicalIllustration';

const UpdateMedicalHandler = ({
	isOpen,
	onClose,
	medicalInfos,
}: {
	isOpen: boolean;
	onClose: () => void;
	medicalInfos: OnboardingInfos;
}): JSX.Element => {
	const [triggerUpdatePatientMedicalFolder] = useUpdatePatientMedicalFolderMutation();

	const {
		handleSubmit: handleSubmitPersonal,
		formState: { errors: errorsPersonal },
		register: registerPersonal,
		control: controlPersonal,
		watch: watchPersonal,
	} = useForm<UpdatePatientMedicalPersonalType>({
		mode: 'onChange',
		defaultValues: {
			name: medicalInfos.name,
			firstname: medicalInfos.firstname,
			birthdate: medicalInfos.birthdate,
			sex: medicalInfos.sex,
			height: medicalInfos.height,
			weight: medicalInfos.weight,
			primaryDoctorId: medicalInfos.primaryDoctorId,
		},
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmitPersonal((dataPersonal) => {
		triggerUpdatePatientMedicalFolder({
			name: dataPersonal.name,
			firstname: dataPersonal.firstname,
			birthdate: dataPersonal.birthdate,
			sex: dataPersonal.sex,
			height: dataPersonal.height,
			weight: dataPersonal.weight,
			primaryDoctorId: dataPersonal.primaryDoctorId,
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
			headerTitle="Mise à jour de vos informations médicales"
			headerSubtitle={'Modifier vos informations personnelles.'}
			headerIcon={MedicalIllustration}
			bodyContent={
				<UpdateMedicalPersonalModalContent
					register={registerPersonal}
					control={controlPersonal}
					errors={errorsPersonal}
					primaryDoctorId={watchPersonal('primaryDoctorId')}
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
