import { Text, VStack, Image, Stack } from '@chakra-ui/react';
import ColorText from 'components/ColorText';
import { useState } from 'react';

const Response = (): JSX.Element => {
	const [ageValue, setAgeValue] = useState(20);
	console.log(ageValue, setAgeValue);

	return (
		<VStack>
			<Stack pt="90px" spacing="60px">
				<Text size="2xl">
					{' '}
					Le médecin que vous avez sélectionné a examiné votre <ColorText children="analyse" />
				</Text>
				<Text size="2xl">
					{' '}
					Un rendez-vous est <ColorText children="nécessaire" /> pour déterminer de maniére plus précise les
					causes de vos symptômes
				</Text>
			</Stack>
			<Image position="absolute" top="720px" src="/assets/edgar.care-logo.svg" alt="test" w={200} h="auto" />
		</VStack>
	);
};

export default Response;
