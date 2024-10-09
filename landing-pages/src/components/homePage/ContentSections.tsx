import { Box, VStack } from '@chakra-ui/react';

import CatchPhraseSection from './CatchPhraseSection';
import ProductSection from './ProductSection';

const ContentSections = (): JSX.Element => (
	<VStack spacing={{ base: '48px', xl: '128px' }} p={{ base: '32px 32px', md: '32px 64px', xl: '64px' }} w="100%">
		<CatchPhraseSection />
		<Box w="100%" h="1px" bg="white" />
		<ProductSection />
	</VStack>
);

export default ContentSections;
