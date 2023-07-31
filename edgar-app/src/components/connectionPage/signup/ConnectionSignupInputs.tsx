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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useRouter, useSearchParams } from 'next/navigation';

import { useAuthContext } from 'contexts/auth';

import useCustomState from 'hooks/useCustomState';

import onSubmitSignup from 'utils/api/connection/onSubmitSignup';

const ConnectionSignupInputs = (): JSX.Element => {
	const { value: email, setValue: setEmail, error: emailError, setError: setEmailError } = useCustomState('');
	const {
		value: password,
		setValue: setPassword,
		error: passwordError,
		setError: setPasswordError,
	} = useCustomState('');
	const { isOpen: showPassword, onToggle: toggleShowPassword } = useDisclosure();

	const router = useRouter();
	const searchParams = useSearchParams();

	const auth = useAuthContext();

	const toast = useToast({ duration: 2000, isClosable: true });

	return (
		<VStack w="100%" maxW="500px" spacing="32px">
			<FormControl isRequired isInvalid={emailError}>
				<VStack spacing="8px" w="100%" align="start">
					<FormLabel size="boldLg" id="edgar-signupPage-formEmail-text">
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
						id="edgar-signupPage-formEmail-input"
					/>
					{emailError && (
						<FormErrorMessage id="edgar-signupPage-formEmailError-text">
							Adresse mail invalide
						</FormErrorMessage>
					)}
				</VStack>
			</FormControl>
			<FormControl isRequired isInvalid={passwordError}>
				<VStack spacing="8px" w="100%" align="start">
					<FormLabel size="boldLg" id="edgar-signupPage-formPassword-text">
						Mot de passe
					</FormLabel>
					<InputGroup>
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
							id="edgar-signupPage-formPassword-input"
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
						<FormErrorMessage id="edgar-signupPage-formPasswordError-text">
							Mot de passe invalide
						</FormErrorMessage>
					)}
				</VStack>
			</FormControl>
			<Button
				w="100%"
				onClick={() =>
					onSubmitSignup(email, password, setEmailError, setPasswordError, auth).then((response) => {
						toast({ title: response.title, status: response.status });
						if (response.status === 'success') {
							if (searchParams.get('redirect')) router.push(searchParams.get('redirect')!);
							else router.push('/dashboard');
						}
					})
				}
				id="edgar-signupPage-form-button"
			>
				S'inscrire
			</Button>
		</VStack>
	);
};

export default ConnectionSignupInputs;
