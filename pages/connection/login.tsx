import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	Button,
	FormControl,
	FormErrorMessage,
	Img,
	Input,
	Text,
	useBreakpointValue,
	useToast,
	VStack,
} from '@chakra-ui/react';

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

	const router = useRouter();
	const auth = useAuthContext();
	const toast = useToast({ duration: 2000, isClosable: true });

	const isMobile = useBreakpointValue({ base: true, sm: false });

	const login = () => {
		if (!email) setEmailError(true);
		if (!password) setPasswordError(true);

		if (email && password) {
			auth.login(email, password).then((response) => {
				toast({ title: response.title, status: response.status });
				if (response.status === 'success') {
					if (router.query.redirect) void router.push(router.query.redirect as string);
					else void router.push('/app/patient');
				}
			});
		} else toast({ title: 'Identifiants incorrects', status: 'error' });
	};

	return (
		<UnprotectedPage>
			<VStack spacing="128px" w="100%">
				<Img
					src="/assets/edgar.care-logo.svg"
					alt="edgar.care-logo"
					w={{ base: '200px', md: '300px' }}
					h="auto"
				/>
				<VStack spacing="64px" maxW="400px">
					<VStack spacing="32px" w="100%">
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
					<VStack spacing="32px" w="100%">
						<Button variant="primary" size={isMobile ? 'md' : 'lg'} w="100%" onClick={login}>
							Me connecter avec ces informations
						</Button>
						<Link
							href={
								router.query.redirect
									? `/connection/infos?redirect=${router.query.redirect}`
									: '/connection/infos'
							}
						>
							<Button variant="secondary" size={isMobile ? 'md' : 'lg'} w="100%">
								Je n'ai pas de compte
							</Button>
						</Link>
					</VStack>
				</VStack>
			</VStack>
		</UnprotectedPage>
	);
};

export default Login;
