import { HStack, Text, VStack, Button, Image } from '@chakra-ui/react';
import CheckBox from 'components/CheckBox';
import ColorText from 'components/ColorText';
import NumInput from 'components/NumberInput';
import SlideBar from 'components/SlideBar';
import { useState } from 'react';

const Infos = (): JSX.Element => {
	const [ageValue, setAgeValue] = useState(20);
	const [sexValue, setsexValue] = useState(true);
	const showSex = () => setsexValue(!sexValue);

	const isMale = !sexValue;
	const isFeMale = sexValue;

	console.log('isMale', isMale);
	console.log('isFeMale', isFeMale);

	const [Size, getSize] = useState<string>('');
	const [Weight, getWeight] = useState<string>('');

	console.log('size', Size);
	console.log('weight', Weight);

	return (
		<VStack spacing="96px" paddingTop="150px">
			<Text size="2xl">
				Avant de commencer j'ai besoin de <ColorText children="quelques informations" />
			</Text>
			<HStack spacing="96px">
				<VStack spacing="20px">
					<HStack spacing="48px">
						<Text size="2xl">Quel est votre age ?</Text>
						<VStack borderRadius="16px" bg="#DADEF2" paddingY="4px" paddingX="24px">
							<Text size="2xl">{ageValue} ans</Text>
						</VStack>
					</HStack>
					<SlideBar ageValue={ageValue} setAgeValue={setAgeValue} />
				</VStack>
				<VStack>
					<Text size="2xl">Quel est votre sexe ?</Text>
					<HStack spacing="24px">
						<CheckBox changeSex={() => showSex()} value={sexValue} image="/assets/icons/male_symbol.svg" />
						<CheckBox
							changeSex={() => showSex()}
							value={!sexValue}
							image="/assets/icons/female_symbol.svg"
						/>
					</HStack>
				</VStack>
			</HStack>

			<HStack spacing="128px">
				<HStack spacing="32px">
					<Text size="2xl">Quel est votre taille ?</Text>
					<NumInput changeValue={(v) => getSize(v)} children="cm" placeholder="175" />
				</HStack>
				<HStack spacing="32px">
					<Text size="2xl">Quel est votre poid ?</Text>
					<NumInput changeValue={(v) => getWeight(v)} children="kg" placeholder="65" />
				</HStack>
			</HStack>
			<VStack spacing="96px">
				<Button variant="primary" size="md">
					Valider mes informations
				</Button>
				<Image src="/assets/edgar.care-logo.svg" alt="test" w={200} h="auto" />
			</VStack>
		</VStack>
	);
};

export default Infos;
