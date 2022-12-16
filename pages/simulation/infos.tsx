import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, HStack, Stack, Text, useToast, VStack } from '@chakra-ui/react';

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
			<VStack spacing="64px">
				<Text size="2xl">
					Avant de commencer, j'ai besoin de <ColorText textValue="quelques informations" />
				</Text>
				<HStack spacing="128px">
					<VStack spacing="24px">
						<HStack spacing="48px">
							<Text size="2xl">Quel est votre age ?</Text>
							<VStack borderRadius="16px" bg="blue.100" p="4px 24px" minW="136px">
								<Text size="2xl">{age} ans</Text>
							</VStack>
						</HStack>
						<SlideBar ageValue={age} setAgeValue={setAge} />
					</VStack>
					<VStack>
						<Text size="2xl">Quel est votre sexe ?</Text>
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
				</HStack>

				<HStack spacing="128px">
					<HStack spacing="32px">
						<Text size="2xl">Quelle est votre taille ?</Text>
						<NumInput value={height} setValue={setHeight} children="cm" placeholder="175" />
					</HStack>
					<HStack spacing="32px">
						<Text size="2xl">Quel est votre poids ?</Text>
						<NumInput value={weight} setValue={setWeight} children="kg" placeholder="65" />
					</HStack>
				</HStack>
				<Stack spacing="96px">
					<HStack spacing="32px">
						<Text size="2xl">Quelle est votre température ?</Text>
						<NumInput value={temperature} setValue={setTemperature} children="deg" placeholder="28" />
					</HStack>
					<VStack spacing="96px">
						<Button
							variant="primary"
							size="lg"
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
		</SimulationPage>
	);
};

export default Infos;
