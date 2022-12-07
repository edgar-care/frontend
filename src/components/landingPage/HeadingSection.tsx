import { Box, Text, VStack } from '@chakra-ui/react';
import colors from '../../theme/foundations/colors';

const HeadingSection = (): JSX.Element => (
	<VStack>
		<Text variant="gradient" size="8xl" fontWeight="800">
			6 JOURS
		</Text>
		<Text size="2xl" w="75%" textAlign="center">
			C'est le temps moyen pour obtenir un rendez-vous chez le médecin généraliste{' '}
			<Box
				as="span"
				bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
				bgClip="text"
				fontWeight="800"
			>
				en France
			</Box>
			.
		</Text>
	</VStack>
);

export default HeadingSection;
