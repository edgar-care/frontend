'use client';

import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	useDisclosure,
	useToast,
	VStack,
	Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useRouter, useSearchParams } from 'next/navigation';

import ResetPasswordHandler from 'components/app/connectionPage/login/modal/ResetPasswordHandler';

import useCustomState from 'hooks/useCustomState';

import { useAuthContext } from 'contexts/auth';

import onSubmitLogin from 'utils/api/connection/onSubmitLogin';

const ConnectionLoginInputs = (): JSX.Element => {
	const { value: email, setValue: setEmail, error: emailError, setError: setEmailError } = useCustomState('');
	const {
		value: password,
		setValue: setPassword,
		error: passwordError,
		setError: setPasswordError,
	} = useCustomState('');
	const { isOpen: showPassword, onToggle: toggleShowPassword } = useDisclosure();
	const { isOpen: isOpenResetModal, onOpen: onOpenResetModal, onClose: onCloseResetModal } = useDisclosure();

	const router = useRouter();
	const searchParams = useSearchParams();

	const {
		auth,
		setAvailableMethods,
		setDeviceInfos,
		setEmail: setEmail2fa,
		setPassword: setPassword2fa,
	} = useAuthContext();

	const toast = useToast({ duration: 2000, isClosable: true });

	return (
		<VStack w="100%" maxW="500px" spacing="32px">
			<FormControl isRequired isInvalid={emailError}>
				<VStack spacing="8px" w="100%" align="start">
					<FormLabel size="boldLg" id="edgar-loginPage-formEmail-text">
						Adresse mail
					</FormLabel>
					<Input
						type="email"
						w="100%"
						maxLength={50}
						value={email}
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
						onChange={(e) => {
							setEmail(e.target.value);
							setEmailError(false);
						}}
						id="edgar-loginPage-formEmail-input"
					/>
					{emailError && (
						<FormErrorMessage id="edgar-loginPage-formEmailError-text">
							Adresse mail invalide
						</FormErrorMessage>
					)}
				</VStack>
			</FormControl>
			<FormControl isRequired isInvalid={passwordError}>
				<VStack spacing="16px" w="100%" align="start">
					<VStack spacing="8px" w="100%" align="start">
						<FormLabel size="boldLg" id="edgar-loginPage-formPassword-text">
							Mot de passe
						</FormLabel>
						<InputGroup w="100%">
							<Input
								type={showPassword ? 'text' : 'password'}
								w="100%"
								maxLength={50}
								value={password}
								placeholder="Minimum 8 caractères"
								border="2px solid"
								borderColor="blue.500"
								borderRadius="12px"
								_placeholder={{
									color: 'gray.400',
								}}
								_hover={{
									borderColor: 'blue.500',
								}}
								onChange={(e) => {
									setPassword(e.target.value);
									setPasswordError(false);
								}}
								id="edgar-loginPage-formPassword-input"
							/>
							<InputRightElement>
								{showPassword ? (
									<ViewOffIcon cursor="pointer" onClick={() => toggleShowPassword()} />
								) : (
									<ViewIcon cursor="pointer" onClick={() => toggleShowPassword()} />
								)}
							</InputRightElement>
						</InputGroup>
						{passwordError && (
							<FormErrorMessage id="edgar-loginPage-formPasswordError-text">
								Mot de passe invalide
							</FormErrorMessage>
						)}
					</VStack>
					<Text onClick={onOpenResetModal} cursor="pointer">
						Mot de passe oublié ?
					</Text>
				</VStack>
			</FormControl>
			<Button
				w="100%"
				onClick={() =>
					onSubmitLogin(
						email,
						password,
						setEmailError,
						setPasswordError,
						auth,
						setAvailableMethods,
						setDeviceInfos,
					).then((response) => {
						if (response.status === 'info') {
							setEmail2fa(email);
							setPassword2fa(password);
							router.push('/login-2fa');
							return;
						}
						toast({ title: response.title, status: response.status });
						if (response.status === 'success') {
							if (searchParams.get('redirect')) router.push(searchParams.get('redirect')!);
							else router.push('/dashboard');
						}
					})
				}
				id="edgar-loginPage-form-button"
			>
				Se connecter
			</Button>
			<ResetPasswordHandler isOpen={isOpenResetModal} onClose={onCloseResetModal} />
		</VStack>
	);
};

export default ConnectionLoginInputs;
