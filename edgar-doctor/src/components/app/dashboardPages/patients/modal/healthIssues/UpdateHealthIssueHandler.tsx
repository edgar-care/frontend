import { useEffect } from 'react';
import { Button, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';
import ModalHandler from 'components/modals/ModalHandler';

import type { HealthIssuesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const UpdateHealthIssueHandler = ({
	isOpen,
	onClose,
	healthIssue,
	onClick,
}: {
	isOpen: boolean;
	onClose: () => void;
	healthIssue: HealthIssuesType;
	onClick: (name: string) => void;
}): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<{ name: string }>({ defaultValues: { name: healthIssue.name } });

	const onCloseAction = () => {
		onClose();
		reset();
	};

	const onSubmit = handleSubmit((data) => {
		onClick(data.name);
	});

	useEffect(() => {
		reset({ name: healthIssue.name });
	}, [healthIssue.name]);

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onCloseAction}
			size="3xl"
			headerTitle="Modifier un sujet de santé"
			headerSubtitle="Renseigner les informations du sujet de santé."
			headerIcon={AddHealthIssueIllustration}
			bodyContent={
				<VStack spacing="4px" align="start" w="100%">
					<FormLabel size="lg">Le nom du sujet de santé</FormLabel>
					<Input
						{...register('name', { minLength: 1, maxLength: 50, required: true })}
						placeholder="Allergie"
						w="100%"
						maxLength={50}
					/>
					{errors.name?.type === 'required' && (
						<ErrorMessage id="edgar-onboardingMedicalPage-medicineNameError-text">
							Ce champ est nécessaire
						</ErrorMessage>
					)}
				</VStack>
			}
			footerPrimaryButton={
				<Button w="100%" onClick={onSubmit}>
					Modifier le sujet de santé
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
export default UpdateHealthIssueHandler;
