import { Button, Input, Text, VStack, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import ErrorMessage from 'components/forms/ErrorMessage';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

import type { ResetPasswordType } from 'types/login/ResetPasswordType';

import { useMissingPasswordMutation } from 'services/request/account';

const ResetPasswordHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [triggerMissingPassword] = useMissingPasswordMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<ResetPasswordType>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onCloseAction = () => {
		reset();
		onClose();
	};

	const onSubmit = handleSubmit((data) => {
		triggerMissingPassword({
			email: data.email,
		})
			.unwrap()
			.then(() => {
				onClose();
				reset();
				toast({ title: 'Votre demande à été prise en compte', status: 'success' });
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onCloseAction}
			size="lg"
			headerTitle="Mot de passe oublié ?"
			headerSubtitle="Renseigner votre adresse mail pour rénitialiser votre mot de passe."
			headerIcon={ShieldIllustration}
			bodyContent={
				<VStack w="100%" align="start" spacing="4px">
					<Text>Adresse mail du compte perdu</Text>
					<Input
						type="email"
						{...register('email', { minLength: 1, maxLength: 50, required: true })}
						w="100%"
						placeholder="prenom.nom@gmail.com"
						border="2px solid"
						borderColor="blue.500"
						borderRadius="12px"
						_placeholder={{
							color: 'gray.400',
						}}
						_hover={{
							borderColor: 'blue.500',
						}}
					/>
					{errors.email?.type === 'required' && <ErrorMessage>Ce champ est nécessaire</ErrorMessage>}
				</VStack>
			}
			footerPrimaryButton={
				<Button size="customMd" w="100%" onClick={onSubmit}>
					Réinitialiser le mot de passe
				</Button>
			}
		/>
	);
};

export default ResetPasswordHandler;
