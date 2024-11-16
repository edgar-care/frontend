import { useEffect } from 'react';
import { Button, FormLabel, Input, useToast, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';
import ModalHandler from 'components/modals/ModalHandler';

import { useUpdateHealthIssueMutation } from 'services/request/medical';

import type { HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

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
	onClick?: (name: string) => void;
}): JSX.Element => {
	const [triggerUpdateHealthIssue] = useUpdateHealthIssueMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<{ name: string }>({ defaultValues: { name: healthIssue.name } });

	const toast = useToast({ duration: 3000, isClosable: true });

	const onCloseAction = () => {
		onClose();
		reset();
	};

	const onSubmit = handleSubmit((data) => {
		if (onClick) onClick(data.name);
		else {
			if (!healthIssue.id) {
				console.error('No health issue id');
				toast({ title: 'Une erreur est survenue', status: 'error' });
				return;
			}
			triggerUpdateHealthIssue({ id: healthIssue.id, name: data.name })
				.unwrap()
				.then(() => {
					toast({ title: 'Votre sujet de santé a bien été modifié', status: 'success' });
					onCloseAction();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
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
			headerSubtitle="Renseigner les informations de votre sujet de santé."
			headerIcon={AddHealthIssueIllustration}
			bodyContent={
				<VStack spacing="4px" align="start" w="100%">
					<FormLabel size="lg">Le nom du votre sujet de santé</FormLabel>
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
