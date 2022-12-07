import { Text, VStack, Image, Stack, HStack, Button } from '@chakra-ui/react';
import ColorText from 'components/ColorText';
import { useState } from 'react';

const Doctor = (): JSX.Element => {
	const [ageValue, setAgeValue] = useState(20);
	console.log(ageValue, setAgeValue);

	return (
		<VStack>
			<Stack pt="90px" spacing="60px">
				<Text size="2xl">
					{' '}
					Ce médecin va examiner votre analize sous <ColorText children="maximun 48h" />
				</Text>
				<Text size="2xl">
					{' '}
					En attendant sa réponse, je vous conseille de faire une sieste dans un endroit{' '}
					<ColorText children="calme" /> et <ColorText children="peu lumineux" />
				</Text>
				<Text size="2xl">Pour que je puisse revenir vers vous, il me faudrait un moyen de communication</Text>
			</Stack>
			<HStack pt="250px" spacing="64px">
				<Button variant="primary" size="xl">
					Créér un compte
				</Button>
				<Button variant="outline" size="lg">
					<ColorText children="Se connecter" />
				</Button>
			</HStack>
			<Image position="absolute" top="720px" src="/assets/edgar.care-logo.svg" alt="test" w={200} h="auto" />
		</VStack>
	);
};

export default Doctor;
