import { Text, VStack } from '@chakra-ui/react';

import GradientText from '../GradientText';

const InfosSection = (): JSX.Element => (
	<VStack spacing="64px" textAlign="center">
		<VStack>
			<Text size={{ base: '2xl', md: '3xl' }}>Comment peut-on réduire ce temps ?</Text>
			<Text size={{ base: 'boldXl', md: '2xl' }}>
				En réduisant les rendez-vous <GradientText textValue="inutiles" />.
			</Text>
		</VStack>
		<Text size={{ base: 'lg', md: 'xl' }}>
			En France, <GradientText textValue="28% des consultations" /> sont jugées inutiles par les médecins
			eux-même.
		</Text>
	</VStack>
);

export default InfosSection;
