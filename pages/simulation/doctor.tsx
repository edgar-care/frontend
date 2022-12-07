import { Text, VStack, Image, Stack } from '@chakra-ui/react';
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
					Merci pour cet <ColorText children="échange" />
				</Text>
				<Text size="2xl">Nous avons besoin d'un medecin pour examiner votre analyse :</Text>
			</Stack>
			<Image position="absolute" top="720px" src="/assets/edgar.care-logo.svg" alt="test" w={200} h="auto" />
		</VStack>
	);
};

export default Doctor;
