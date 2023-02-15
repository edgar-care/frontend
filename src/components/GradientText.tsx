import { Box, BoxProps } from '@chakra-ui/react';

const GradientText = ({ textValue, ...props }: { textValue: string } & BoxProps): JSX.Element => (
	<Box
		as="span"
		// bg={`linear-gradient(90deg, ${colors.blue[600]} 0%, ${colors.pink[600]} 100%)`}
		bg="green.500"
		bgClip="text"
		fontWeight="800"
		{...props}
	>
		{textValue}
	</Box>
);

export default GradientText;
