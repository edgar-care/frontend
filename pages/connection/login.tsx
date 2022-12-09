import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Button, FormControl, FormErrorMessage, Img, Input, Text, useToast, VStack } from '@chakra-ui/react';

import UnprotectedPage from 'components/pages/UnprotectedPage';

import useStringState from 'hooks/useStringState';

import { useAuthContext } from 'contexts/auth';

const Login = (): JSX.Element => {
	const { value: email, setValue: setEmail, error: emailError, setError: setEmailError } = useStringState();
	const {
		value: password,
		setValue: setPassword,
		error: passwordError,
		setError: setPasswordError,
	} = useStringState();

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
					else void router.push('/dashboard');
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
						<Link href={`/connection/signup?redirect=${params.get('redirect')}`}>
							<Button variant="secondary">Je n'ai pas de compte</Button>
						</Link>
					</VStack>
				</VStack>
			</VStack>
		</UnprotectedPage>
	);
};

export default Login;
