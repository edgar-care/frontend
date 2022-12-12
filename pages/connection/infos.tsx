import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

import { Button, FormControl, FormErrorMessage, Img, Input, Text, useToast, VStack } from '@chakra-ui/react';

import UnprotectedPage from 'components/pages/UnprotectedPage';

import useStringState from 'hooks/useStringState';

const Infos = (): JSX.Element => {
	const { value: name, setValue: setName, error: nameError, setError: setNameError } = useStringState();
	const {
		value: firstname,
		setValue: setFirstname,
		error: firstnameError,
		setError: setFirstnameError,
	} = useStringState();

	const router = useRouter();
	const params = useSearchParams();
	const toast = useToast({ duration: 2000, isClosable: true });

	const validate = () => {
		if (!name) setNameError(true);
		if (!firstname) setFirstnameError(true);

		if (name && firstname) {
			// TODO: send infos to the back
			if (params.get('redirect')) void router.push(params.get('redirect')!);
			else void router.push('/dashboard');
		} else toast({ title: 'Informations incorrectes', status: 'error' });
	};

	return (
		<UnprotectedPage>
			<VStack spacing="128px">
				<Img src="/assets/edgar.care-logo.svg" alt="edgar.care-logo" w="300px" h="auto" />
				<VStack spacing="48px">
					<Text size="2xl">Avant de continuer, j'ai besoin de quelques informations.</Text>
					<VStack spacing="32px" w="400px">
						<FormControl isRequired isInvalid={nameError}>
							<Text size="boldMd">Votre nom</Text>
							<Input
								type="text"
								w="100%"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
									setNameError(false);
								}}
							/>
							{nameError && <FormErrorMessage>Nom invalide</FormErrorMessage>}
						</FormControl>
						<FormControl isRequired isInvalid={firstnameError}>
							<Text size="boldMd">Votre prénom</Text>
							<Input
								type="text"
								w="100%"
								value={firstname}
								onChange={(e) => {
									setFirstname(e.target.value);
									setFirstnameError(false);
								}}
							/>
							{firstnameError && <FormErrorMessage>Prénom invalide</FormErrorMessage>}
						</FormControl>
					</VStack>
					<VStack spacing="32px">
						<Button variant="primary" size="lg" onClick={validate}>
							Valider mes informations
						</Button>
					</VStack>
				</VStack>
			</VStack>
		</UnprotectedPage>
	);
};

export default Infos;
