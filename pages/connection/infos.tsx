import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
	Button,
	FormControl,
	FormErrorMessage,
	Img,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';

import UnprotectedPage from 'components/pages/UnprotectedPage';
import NumInput from 'components/NumInput';

import useCustomState from 'hooks/useCustomState';

import { usePatientContext } from 'contexts/user';

import { PatientSex } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';
import GradientText from '../../src/components/GradientText';

const Infos = (): JSX.Element => {
	const { value: name, setValue: setName, error: nameError, setError: setNameError } = useCustomState('');
	const {
		value: firstname,
		setValue: setFirstname,
		error: firstnameError,
		setError: setFirstnameError,
	} = useCustomState('');
	const { value: age, setValue: setAge, error: ageError, setError: setAgeError } = useCustomState(0);
	const { value: weight, setValue: setWeight, error: weightError, setError: setWeightError } = useCustomState(0);
	const { value: height, setValue: setHeight, error: heightError, setError: setHeightError } = useCustomState(0);
	const { value: sex, setValue: setSex, error: sexError } = useCustomState('M');

	const router = useRouter();
	const { infos, setInfos } = usePatientContext();
	const toast = useToast({ duration: 2000, isClosable: true });

	useEffect(() => {
		if (!router.isReady) return;
		if (infos)
			void router.push(
				router.query.redirect ? `/connection/signup?redirect=${router.query.redirect}` : '/connection/signup',
			);
	}, [infos, router.isReady]);

	const validate = () => {
		if (!name) setNameError(true);
		if (!firstname) setFirstnameError(true);
		if (age === 0) setAgeError(true);
		if (weight === 0) setWeightError(true);
		if (height === 0) setHeightError(true);

		if (name && firstname && age !== 0 && weight !== 0 && height !== 0) {
			setInfos({ name: firstname, last_name: name, age, weight, height, sex: sex as PatientSex });
			void router.push(
				router.query.redirect ? `/connection/signup?redirect=${router.query.redirect}` : '/connection/signup',
			);
		} else toast({ title: 'Informations incorrectes', status: 'error' });
	};

	return (
		<UnprotectedPage>
			<VStack spacing="128px">
				<Img src="/assets/edgar.care-logo.svg" alt="edgar.care-logo" w="300px" h="auto" />
				<VStack spacing="48px">
					<Text size={{ base: 'boldXl', sm: '2xl' }} textAlign="center">
						Avant de créer votre compte, j'ai besoin de <GradientText textValue="quelques informations" />
					</Text>
					<VStack spacing="32px" maxW="450px">
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
						<Stack
							direction={{ base: 'column', md: 'row' }}
							justify="space-between"
							spacing="32px"
							w={{ base: '100%', md: '' }}
						>
							<FormControl isRequired isInvalid={ageError}>
								<Text size="boldMd">Votre age</Text>
								<NumInput value={age} setValue={setAge} children="age" placeholder="20" />
								{ageError && <FormErrorMessage>Age invalide</FormErrorMessage>}
							</FormControl>
							<FormControl isRequired isInvalid={heightError}>
								<Text size="boldMd">Votre taille</Text>
								<NumInput value={height} setValue={setHeight} children="cm" placeholder="170" />
								{heightError && <FormErrorMessage>Taille invalide</FormErrorMessage>}
							</FormControl>
							<FormControl isRequired isInvalid={weightError}>
								<Text size="boldMd">Votre poids</Text>
								<NumInput value={weight} setValue={setWeight} children="kg" placeholder="65" />
								{weightError && <FormErrorMessage>Poids invalide</FormErrorMessage>}
							</FormControl>
						</Stack>
						<FormControl isRequired isInvalid={sexError}>
							<Text size="boldMd">Votre sexe</Text>
							<RadioGroup onChange={setSex} value={sex} defaultValue={sex}>
								<Stack direction={{ base: 'column', md: 'row' }} justify="space-between" spacing="24px">
									<Stack
										spacing="24px"
										border={`2px solid ${colors.blue[100]}`}
										borderRadius="8px"
										p="8px 16px"
										w="250px"
										_hover={{
											borderColor: 'blue.300',
										}}
									>
										<Radio value="M">Masculin</Radio>
									</Stack>
									<Stack
										spacing="24px"
										border={`2px solid ${colors.blue[100]}`}
										borderRadius="8px"
										p="8px 16px"
										w="250px"
										_hover={{
											borderColor: 'blue.300',
										}}
									>
										<Radio value="F">Féminin</Radio>
									</Stack>
								</Stack>
							</RadioGroup>
						</FormControl>
					</VStack>
					<VStack spacing="32px">
						<Button variant="primary" size={{ base: 'md', md: 'lg' }} onClick={validate}>
							Valider mes informations
						</Button>
					</VStack>
				</VStack>
			</VStack>
		</UnprotectedPage>
	);
};

export default Infos;
