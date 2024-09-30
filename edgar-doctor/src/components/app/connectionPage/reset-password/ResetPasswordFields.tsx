import {
	VStack,
	HStack,
	Icon,
	Text,
	Image,
	Button,
	useToast,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	useDisclosure,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import CrossIcon from 'assets/icons/CrossIcon';
import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

import type { ResetPasswordType } from 'types/app/login/ResetPasswordType';

import { useResetPasswordMutation } from 'services/request/account';

const ResetPasswordFields = ({ uuid }: { uuid: string | null }): JSX.Element => {
	const [triggerResetPassword] = useResetPasswordMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<ResetPasswordType>({
		mode: 'onChange',
	});
	const { isOpen: showPassword, onToggle: toggleShowPassword } = useDisclosure();
	const { isOpen: showConfirmPassword, onToggle: toggleShowConfirmPassword } = useDisclosure();

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		if (data.password !== data.confirmPassword) {
			toast({ title: 'Les mots de passe ne correspondent pas', status: 'error' });
			return;
		}
		if (uuid) {
			triggerResetPassword({
				uuid,
				password: data.password,
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre mot de passe a été mis à jour', status: 'success' });
					reset();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		} else {
			toast({ title: 'UUID est nul', status: 'error' });
		}
	});

	return (
		<VStack w="100%" justify="space-between" align="center">
			<VStack w="100%" spacing="64px">
				<VStack w="100%" spacing="16px">
					<HStack w="100%" justify="space-between">
						<Icon as={ShieldIllustration} w="64px" h="64px" />
						<Icon as={CrossIcon} w="16px" h="16px" />
					</HStack>
					<VStack w="100%" spacing="0px" align="start">
						<Text size="bold2xl">Réinitialiser votre mot de passe</Text>
						<Text size="lg" color="grey.600">
							Renseigner votre nouveau mot de passe.
						</Text>
					</VStack>
				</VStack>
				<VStack w="100%" spacing="32px">
					<VStack w="100%" spacing="16px">
						<VStack w="100%" align="start" spacing="4px">
							<FormLabel size="md">Mot de passe</FormLabel>
							<InputGroup>
								<Input
									type={showPassword ? 'text' : 'password'}
									placeholder="Minimum 8 caractères"
									{...register('password', { required: true, minLength: 8 })}
									minLength={8}
									maxLength={100}
								/>
								<InputRightElement>
									{showPassword ? (
										<ViewOffIcon cursor="pointer" onClick={() => toggleShowPassword()} />
									) : (
										<ViewIcon cursor="pointer" onClick={() => toggleShowPassword()} />
									)}
								</InputRightElement>
							</InputGroup>
							{errors.password?.type === 'required' && (
								<ErrorMessage>Ce champ est nécessaire</ErrorMessage>
							)}
							{errors.password?.type === 'minLength' && (
								<ErrorMessage>Le mot de passe doit faire 8 caractères</ErrorMessage>
							)}
						</VStack>
						<VStack w="100%" align="start" spacing="4px">
							<FormLabel size="md">Confirmation du mot de passe</FormLabel>
							<InputGroup>
								<Input
									type={showConfirmPassword ? 'text' : 'password'}
									placeholder="Minimum 8 caractères"
									{...register('confirmPassword', { required: true, minLength: 8 })}
									minLength={8}
									maxLength={100}
								/>
								<InputRightElement>
									{showConfirmPassword ? (
										<ViewOffIcon cursor="pointer" onClick={() => toggleShowConfirmPassword()} />
									) : (
										<ViewIcon cursor="pointer" onClick={() => toggleShowConfirmPassword()} />
									)}
								</InputRightElement>
							</InputGroup>
							{errors.confirmPassword?.type === 'required' && (
								<ErrorMessage>Ce champs est nécessaire</ErrorMessage>
							)}
							{errors.confirmPassword?.type === 'minLength' && (
								<ErrorMessage>Le mot de passe doit faire 8 caractères</ErrorMessage>
							)}
						</VStack>
					</VStack>
					<Button w="100%" variant="primary" size="customMd" onClick={onSubmit}>
						Confirmer
					</Button>
				</VStack>
			</VStack>
			<Image src="/assets/logo/colored-edgar-logo.svg" alt="colored-edgar-logo" w="200px" />
		</VStack>
	);
};

export default ResetPasswordFields;
