import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, HStack, Stack, Text, useBreakpointValue, useToast, VStack } from '@chakra-ui/react';

import CheckBox from 'components/simulationPage/CheckBox';
import ColorText from 'components/GradientText';
import NumInput from 'components/NumInput';
import SlideBar from 'components/SlideBar';
import SimulationPage from 'components/pages/simulation/SimulationPage';

import useToggle from 'hooks/useToggle';

import { usePatientContext } from 'contexts/user';

import { MessageResponse } from 'types/MessageResponse';

const Infos = (): JSX.Element => {
	const { infos, setInfos } = usePatientContext();
	const router = useRouter();
	const toast = useToast({ duration: 2000, isClosable: true });

	const [age, setAge] = useState(20);
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);
	const [temperature, setTemperature] = useState(0);
	const { toggle: isMale, toggleHandler: sexValueHandler } = useToggle(true);

	const isMobile = useBreakpointValue({ base: true, lg: false });

	const saveInfos = async (): Promise<MessageResponse> => {
		try {
			setInfos({
				age,
				height,
				weight,
				name: infos ? infos.name : '',
				last_name: infos ? infos.last_name : '',
				sex: isMale ? 'M' : 'F',
			});

			return { title: 'Informations sauvegardées', status: 'success' };
		} catch {
			return {
				title: 'Une erreur est survenue',
				status: 'error',
			};
		}
	};

	return (
		<SimulationPage>
			<VStack spacing="64px" pb={{ base: '64px', md: '0px' }}>
				<Text size={{ base: 'boldXl', sm: '2xl' }} textAlign={{ base: 'center', lg: 'left' }}>
					Avant de commencer j'ai besoin de <ColorText textValue="quelques informations" />
				</Text>
				<VStack spacing={{ base: '32px', sm: '64px' }}>
					<Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '64px', lg: '112px' }}>
						<VStack spacing="24px">
							<Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '16px', lg: '48px' }}>
								<Text size={{ base: 'boldXl', sm: '2xl' }}>Quel est votre age ?</Text>
								<VStack borderRadius="16px" bg="blue.100" p="4px 24px" minW="136px">
									<Text size={{ base: 'boldLg', sm: '2xl' }}>{age} ans</Text>
								</VStack>
							</Stack>
							<SlideBar ageValue={age} setAgeValue={setAge} />
						</VStack>
						<VStack>
							<Text size={{ base: 'boldXl', sm: '2xl' }}>Quel est votre sexe ?</Text>
							<HStack spacing="24px">
								<CheckBox
									valueHandler={sexValueHandler}
									value={isMale}
									image="/assets/icons/male_symbol.svg"
								/>
								<CheckBox
									valueHandler={sexValueHandler}
									value={!isMale}
									image="/assets/icons/female_symbol.svg"
								/>
							</HStack>
						</VStack>
					</Stack>

					<Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '32px', lg: '112px' }}>
						<Stack
							direction={{ base: 'column', lg: 'row' }}
							textAlign={{ base: 'center', lg: 'left' }}
							align={{ base: 'center', lg: 'left' }}
							spacing={{ base: '16px', lg: '32px' }}
						>
							<Text size={{ base: 'boldXl', sm: '2xl' }}>Quelle est votre taille ?</Text>
							<NumInput value={height} setValue={setHeight} children="cm" placeholder="175" />
						</Stack>
						<Stack
							direction={{ base: 'column', lg: 'row' }}
							textAlign={{ base: 'center', lg: 'left' }}
							align={{ base: 'center', lg: 'left' }}
							spacing={{ base: '16px', lg: '32px' }}
						>
							<Text size={{ base: 'boldXl', sm: '2xl' }}>Quel est votre poids ?</Text>
							<NumInput value={weight} setValue={setWeight} children="kg" placeholder="65" />
						</Stack>
					</Stack>
					<Stack spacing="96px">
						<Stack
							direction={{ base: 'column', lg: 'row' }}
							textAlign={{ base: 'center', lg: 'left' }}
							align={{ base: 'center', lg: 'left' }}
							spacing={{ base: '16px', lg: '32px' }}
						>
							<Text size={{ base: 'boldXl', sm: '2xl' }}>Quelle est votre température ?</Text>
							<NumInput value={temperature} setValue={setTemperature} children="deg" placeholder="28" />
						</Stack>
						<VStack spacing="96px">
							<Button
								variant="primary"
								size={isMobile ? 'md' : 'lg'}
								onClick={() => {
									saveInfos().then((res) => {
										toast({
											title: res.title,
											status: res.status,
										});
										if (res.status === 'success') void router.push('/simulation/chat');
									});
								}}
							>
								Valider mes informations
							</Button>
						</VStack>
					</Stack>
				</VStack>
			</VStack>
		</SimulationPage>
	);
};

export default Infos;
