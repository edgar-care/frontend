import { Text, VStack } from '@chakra-ui/react';

import HighlightText from 'components/HighlightText';

const InfosSection = (): JSX.Element => (
	<VStack spacing="64px" textAlign="center">
		<VStack>
			<Text size={{ base: '2xl', md: '3xl' }}>Comment peut-on réduire ce temps ?</Text>
			<Text size={{ base: 'boldXl', md: '2xl' }}>
				En réduisant les rendez-vous <HighlightText>inutiles</HighlightText>.
			</Text>
		</VStack>
		<Text size={{ base: 'lg', md: 'xl' }}>
			En France, <HighlightText>28% des consultations</HighlightText> sont jugées inutiles par les médecins
			eux-mêmes.
		</Text>
	</VStack>
);

export default InfosSection;
