import { Box } from '@chakra-ui/react';

const HighlightText = ({ children }: { children: string }): JSX.Element => (
	<Box as="span" position="relative" zIndex={1} whiteSpace="nowrap">
		{children}
		<Box
			as="span"
			position="absolute"
			zIndex={-1}
			bg="rgba(90, 175, 51, 0.8);"
			w="calc(100% - 8px)"
			// h={{ base: '20px', lg: '30px', '2xl': '40px' }}
			h="calc(100% / 2)"
			bottom="0px"
			left={{ base: '16px', lg: '24px' }}
		/>
	</Box>
);

export default HighlightText;
