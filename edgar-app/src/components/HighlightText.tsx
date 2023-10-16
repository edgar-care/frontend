import { Box, type BoxProps } from '@chakra-ui/react';

const HighlightText = ({ children, ...props }: { children: string } & BoxProps): JSX.Element => (
	<Box as="span" bg="green.600" bgClip="text" {...props}>
		{children}
	</Box>
);

export default HighlightText;
