import { Box, BoxProps } from '@chakra-ui/react';

const GradientText = ({ textValue, ...props }: { textValue: string } & BoxProps): JSX.Element => (
	<Box as="span" bg="green.500" bgClip="text" fontWeight="800" {...props}>
		{textValue}
	</Box>
);

export default GradientText;
