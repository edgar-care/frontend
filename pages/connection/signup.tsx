import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Button, FormControl, FormErrorMessage, Img, Input, Text, useToast, VStack } from '@chakra-ui/react';

import UnprotectedPage from 'components/pages/UnprotectedPage';

import { useAuthContext } from 'contexts/auth';
import { useEffect } from 'react';
import useCustomState from 'hooks/useCustomState';
import { usePatientContext } from '../../src/contexts/user';

const Signup = (): JSX.Element => {
	const { value: email, setValue: setEmail, error: emailError, setError: setEmailError } = useCustomState('');
	const {
		value: password,
		setValue: setPassword,
		error: passwordError,
		setError: setPasswordError,
	} = useCustomState('');
	const {
		value: passwordConfirmation,
		setValue: setPasswordConfirmation,
		error: passwordConfirmationError,
		setError: setPasswordConfirmationError,
	} = useCustomState('');

	const params = useSearchParams();
	const router = useRouter();
	const auth = useAuthContext();
	const { infos } = usePatientContext();
	const toast = useToast({ duration: 2000, isClosable: true });

	useEffect(() => {
		if (!infos)
			void router.push(
				params.get('redirect') ? `/connection/infos?redirect=${params.get('redirect')}` : '/connection/infos',
			);
	}, [infos]);

	const signup = () => {
		if (!email) setEmailError(true);
		if (!password) setPasswordError(true);
		if (!passwordConfirmation) setPasswordConfirmationError(true);
		if (password !== passwordConfirmation) setPasswordConfirmationError(true);

		if (email && password && password === passwordConfirmation && infos) {
			auth.signup(email, password, infos).then((response) => {
				toast({ title: response.title, status: response.status });
				if (response.status === 'success') {
					if (params.get('redirect')) void router.push(params.get('redirect')!);
					else void router.push('/app/patient');
				}
			});
		} else toast({ title: 'Identifiants incorrects', status: 'error' });
	};

	return (
		<UnprotectedPage>
			<VStack spacing="128px">
				<Img src="/assets/edgar.care-logo.svg" alt="edgar.care-logo" w="300px" h="auto" />
				<VStack spacing="64px">
					<VStack spacing="32px" w="400px">
						<FormControl isRequired isInvalid={emailError}>
							<Text size="boldMd">Adresse mail</Text>
							<Input
								type="email"
								w="100%"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setEmailError(false);
								}}
							/>
							{emailError && <FormErrorMessage>Adresse mail invalide</FormErrorMessage>}
						</FormControl>
						<FormControl isRequired isInvalid={passwordError}>
							<Text size="boldMd">Mot de passe</Text>
							<Input
								type="password"
								w="100%"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setPasswordError(false);
								}}
							/>
							{passwordError && <FormErrorMessage>Mot de passe invalide</FormErrorMessage>}
						</FormControl>
						<FormControl isRequired isInvalid={passwordConfirmationError}>
							<Text size="boldMd">Confirmer votre mot de passe</Text>
							<Input
								type="password"
								w="100%"
								value={passwordConfirmation}
								onChange={(e) => {
									setPasswordConfirmation(e.target.value);
									setPasswordConfirmationError(false);
								}}
							/>
							{passwordConfirmationError && <FormErrorMessage>Mot de passe invalide</FormErrorMessage>}
						</FormControl>
					</VStack>
					<VStack spacing="32px">
						<Button variant="primary" size="lg" onClick={signup}>
							M'inscrire avec ces informations
						</Button>
						<Link
							href={
								params.get('redirect')
									? `/connection/login?redirect=${params.get('redirect')}`
									: '/connection/login'
							}
						>
							<Button variant="secondary">J'ai déjà un compte</Button>
						</Link>
					</VStack>
				</VStack>
			</VStack>
		</UnprotectedPage>
	);
};

export default Signup;
