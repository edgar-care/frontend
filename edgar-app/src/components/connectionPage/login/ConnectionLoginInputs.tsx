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

import useCustomState from 'hooks/useCustomState';

import { useAuthContext } from 'contexts/auth';

import onSubmitLogin from 'utils/connection/onSubmitLogin';

const ConnectionLoginInputs = (): JSX.Element => {
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
				<FormLabel size="boldLg">Adresse mail</FormLabel>
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
				/>
				{emailError && <FormErrorMessage>Adresse mail invalide</FormErrorMessage>}
			</FormControl>
			<FormControl isRequired isInvalid={passwordError}>
				<FormLabel size="boldLg">Mot de passe</FormLabel>
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
					/>
					<InputRightElement>
						{showPassword ? (
							<ViewOffIcon cursor="pointer" onClick={() => toggleShowPassword()} />
						) : (
							<ViewIcon cursor="pointer" onClick={() => toggleShowPassword()} />
						)}
					</InputRightElement>
				</InputGroup>
				{passwordError && <FormErrorMessage>Mot de passe invalide</FormErrorMessage>}
			</FormControl>
			<Button
				w="100%"
				onClick={() =>
					onSubmitLogin(email, password, setEmailError, setPasswordError, auth).then((response) => {
						toast({ title: response.title, status: response.status });
						if (response.status === 'success') {
							if (searchParams.get('redirect')) router.push(searchParams.get('redirect')!);
							else router.push('/dashboard');
						}
					})
				}
			>
				Se connecter
			</Button>
		</VStack>
	);
};

export default ConnectionLoginInputs;
