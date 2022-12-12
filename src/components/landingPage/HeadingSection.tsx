import { Text, VStack } from '@chakra-ui/react';

import GradientText from '../GradientText';

const HeadingSection = (): JSX.Element => (
	<VStack>
		<Text variant="gradient" size="8xl" fontWeight="800">
			6 JOURS
		</Text>
		<Text size="2xl" w="75%" textAlign="center">
			C'est le temps moyen pour obtenir un rendez-vous chez le médecin généraliste{' '}
			<GradientText textValue="en France" />.
		</Text>
	</VStack>
);

export default HeadingSection;
