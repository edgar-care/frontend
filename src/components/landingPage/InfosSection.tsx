import { Text, VStack } from '@chakra-ui/react';

import GradientText from '../GradientText';

const InfosSection = (): JSX.Element => (
	<VStack spacing="64px">
		<VStack>
			<Text size="3xl">
				Comment peut-on <GradientText textValue="réduire" /> ce temps ?
			</Text>
			<Text size="2xl">
				En réduisant les rendez-vous <GradientText textValue="inutiles" />.
			</Text>
		</VStack>
		<Text size="2xl">
			En France, <GradientText textValue="28% des consultations" /> sont jugées inutiles par les médecins
			eux-même.
		</Text>
	</VStack>
);

export default InfosSection;
