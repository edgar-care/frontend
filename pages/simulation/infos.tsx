import { useState } from 'react';
import Link from 'next/link';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';

import CheckBox from 'components/simulationPage/CheckBox';
import ColorText from 'components/GradientText';
import NumInput from 'components/NumInput';
import SlideBar from 'components/SlideBar';
import SimulationPage from 'components/pages/simulation/SimulationPage';

import useToggle from 'hooks/useToggle';

const Infos = (): JSX.Element => {
	const [age, setAge] = useState(20);
	const [height, setHeight] = useState<string>('');
	const [weight, setWeight] = useState<string>('');
	const { toggle: isMale, toggleHandler: sexValueHandler } = useToggle(true);

	console.log(isMale);

	return (
		<SimulationPage>
			<VStack spacing="96px">
				<Text size="2xl">
					Avant de commencer j'ai besoin de <ColorText textValue="quelques informations" />
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
				<VStack spacing="96px">
					<Link href="/simulation/chat">
						<Button variant="primary" size="lg">
							Valider mes informations
						</Button>
					</Link>
				</VStack>
			</VStack>
		</SimulationPage>
	);
};

export default Infos;
