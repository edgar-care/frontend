import { Box, Text, VStack } from '@chakra-ui/react';
import colors from '../../theme/foundations/colors';

const InfosSection = (): JSX.Element => (
	<VStack spacing="64px">
		<VStack>
			<Text size="3xl">
				Comment peut-on{' '}
				<Box
					as="span"
					bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
					bgClip="text"
					fontWeight="800"
				>
					réduire
				</Box>{' '}
				ce temps ?
			</Text>
			<Text size="2xl">
				En réduisant les rendez-vous{' '}
				<Box
					as="span"
					bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
					bgClip="text"
					fontWeight="800"
				>
					inutiles
				</Box>
				.
			</Text>
		</VStack>
		<Text size="2xl">
			En France,{' '}
			<Box
				as="span"
				bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
				bgClip="text"
				fontWeight="800"
			>
				28% des consultations
			</Box>{' '}
			sont jugées inutiles par les médecins eux-même.
		</Text>
	</VStack>
);

export default InfosSection;
