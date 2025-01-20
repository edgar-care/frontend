import { useEffect } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import AddTreatmentModalContent from 'components/dashboardPages/treatments/AddTreatmentModalContent';

import { useUpdateTreatmentMutation } from 'services/request/treatments';

import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const UpdateTreatmentHandler = ({
	isOpen,
	onClose,
	treatment,
}: {
	isOpen: boolean;
	onClose: () => void;
	treatment: TreatmentType;
}): JSX.Element => {
	const [triggerUpdateTreatment] = useUpdateTreatmentMutation();

	const {
		handleSubmit,
		formState: { errors },
		control,
		watch,
		reset,
	} = useForm<TreatmentType>({ mode: 'onChange', defaultValues: treatment });

	const toast = useToast({ duration: 3000, isClosable: true });

	const onCloseAction = () => {
		onClose();
		reset();
	};

	const onSubmit = handleSubmit((data) => {
		triggerUpdateTreatment({
			id: data.id,
			startDate: data.startDate,
			endDate: data.endDate ?? undefined,
			medicines: data.medicines,
		})
			.unwrap()
			.then(() => {
				toast({ title: 'Traitement mis à jour', status: 'success' });
				onCloseAction();
			})
			.catch(() => toast({ title: 'Erreur lors de la mise à jour du traitement', status: 'error' }));
	});

	useEffect(() => {
		reset(treatment);
	}, [treatment]);

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onCloseAction}
			size="3xl"
			headerTitle="Mise à jour du traitement"
			headerSubtitle="Renseigner les informations de votre sujet de santé."
			headerIcon={AddHealthIssueIllustration}
			bodyContent={
				<AddTreatmentModalContent
					hasHealthIssueSearch={false}
					healthIssues={[]}
					control={control}
					errors={errors}
					watch={watch}
				/>
			}
			footerPrimaryButton={
				<Button w="100%" onClick={onSubmit}>
					Mettre à jour
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
export default UpdateTreatmentHandler;
