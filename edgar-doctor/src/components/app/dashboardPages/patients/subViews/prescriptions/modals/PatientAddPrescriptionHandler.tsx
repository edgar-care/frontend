import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import PatientAddPrescriptionModalContent from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionModalContent';

import { useUploadPrescriptionMutation } from 'services/request/prescriptions';

import type { PatientType } from 'types/app/dashboard/patients/PatientType';
import type { UploadPatientPrescriptionDTO } from 'store/types/prescriptions.type';

import PrescriptionIllustration from 'assets/illustrations/PrescriptionIllustration';

const PatientAddPrescriptionHandler = ({
	isOpen,
	onClose,
	patient,
}: {
	isOpen: boolean;
	onClose: () => void;
	patient: PatientType;
}): JSX.Element => {
	const [triggerUploadPrescription] = useUploadPrescriptionMutation();
	const {
		handleSubmit,
		formState: { errors },
		control,
		watch,
		reset,
	} = useForm<UploadPatientPrescriptionDTO>({
		mode: 'onChange',
		defaultValues: {
			patientId: patient.id,
			medicines: [],
		},
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		console.log(data);
		triggerUploadPrescription(data)
			.unwrap()
			.then(() => {
				toast({ title: 'Votre ordonnance a été ajouté', status: 'success' });
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	const onCloseAction = () => {
		onClose();
		reset();
	};

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onCloseAction}
			size="5xl"
			headerTitle="Création une ordonnance"
			headerSubtitle={`Créer une ordonnance pour votre patient: ${patient.medicalInfos.firstname} ${patient.medicalInfos.name.toUpperCase()}`}
			headerIcon={PrescriptionIllustration}
			bodyContent={<PatientAddPrescriptionModalContent control={control} watch={watch} errors={errors} />}
			footerPrimaryButton={
				<Button w="100%" type="submit" onClick={onSubmit}>
					Créer l'ordonnance
				</Button>
			}
			footerSecondaryButton={
				<Button variant="secondary" w="100%" onClick={onCloseAction}>
					Annuler
				</Button>
			}
		/>
	);
};

export default PatientAddPrescriptionHandler;
