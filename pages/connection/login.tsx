import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Button, FormControl, FormErrorMessage, Img, Input, Text, useToast, VStack } from '@chakra-ui/react';

import UnprotectedPage from 'components/pages/UnprotectedPage';

import { useAuthContext } from 'contexts/auth';

import useCustomState from 'hooks/useCustomState';

const Login = (): JSX.Element => {
	const { value: email, setValue: setEmail, error: emailError, setError: setEmailError } = useCustomState('');
	const {
		value: password,
		setValue: setPassword,
		error: passwordError,
		setError: setPasswordError,
	} = useCustomState('');

	const params = useSearchParams();
	const router = useRouter();
	const auth = useAuthContext();
	const toast = useToast({ duration: 2000, isClosable: true });

	const login = () => {
		if (!email) setEmailError(true);
		if (!password) setPasswordError(true);

		if (email && password) {
			auth.login(email, password).then((response) => {
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
					</VStack>
					<VStack spacing="32px">
						<Button variant="primary" size="lg" onClick={login}>
							Me connecter avec ces informations
						</Button>
						<Link
							href={
								params.get('redirect')
									? `/connection/infos?redirect=${params.get('redirect')}`
									: '/connection/infos'
							}
						>
							<Button variant="secondary">Je n'ai pas de compte</Button>
						</Link>
					</VStack>
				</VStack>
			</VStack>
		</UnprotectedPage>
	);
};

export default Login;
