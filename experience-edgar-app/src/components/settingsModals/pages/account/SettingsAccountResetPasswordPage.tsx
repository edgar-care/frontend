import { Button, useToast, VStack, Input, FormLabel } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

import { useUpdatePasswordMutation } from 'services/request/account';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';
import type { UpdatePasswordType } from 'types/password/UpdatePasswordType';

const SettingsAccountResetPasswordPage = (onCancel: () => void): SettingsPageType => {
	const [triggerUpdatePasswordMutation] = useUpdatePasswordMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<UpdatePasswordType>({ mode: 'onChange' });

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		const { oldPassword, password, confirmPassword } = data;

		if (password !== confirmPassword) {
			toast({
				title: 'Les mots de passe ne correspondent pas.',
				status: 'error',
			});
		} else {
			triggerUpdatePasswordMutation({
				oldPassword,
				newPassword: password,
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre mot de passe a été changé.', status: 'success' });
					reset();
					onCancel();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	});

	return {
		headerTitle: 'Mise à jour de votre mot de passe',
		headerSubtitle: 'Saisisser votre mot de passe actuel ainsi que votre nouveau mot de passe.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<VStack as="form" spacing="8px" align="start">
				<VStack w="100%" spacing="4px" align="start">
					<FormLabel size="lg">Votre mot de passe actuel</FormLabel>
					<Input
						type="password"
						{...register('oldPassword', { required: 'Ce champ est obligatoire.' })}
						isInvalid={!!errors.oldPassword}
					/>
				</VStack>
				<VStack w="100%" spacing="4px" align="start">
					<FormLabel size="lg">Votre nouveau mot de passe</FormLabel>
					<Input
						placeholder="Minimum 8 caractères"
						type="password"
						{...register('password', { required: 'Ce champ est obligatoire.' })}
						isInvalid={!!errors.password}
					/>
				</VStack>
				<VStack w="100%" spacing="4px" align="start">
					<FormLabel size="lg">Confirmer votre nouveau mot de passe</FormLabel>
					<Input
						placeholder="Minimum 8 caractères"
						type="password"
						{...register('confirmPassword', { required: 'Ce champ est obligatoire.' })}
						isInvalid={!!errors.confirmPassword}
					/>
				</VStack>
			</VStack>
		),
		footerPrimaryButton: (
			<Button w="100%" variant="primary" type="submit" onClick={onSubmit}>
				Changer le mot de passe
			</Button>
		),
	};
};

export default SettingsAccountResetPasswordPage;
