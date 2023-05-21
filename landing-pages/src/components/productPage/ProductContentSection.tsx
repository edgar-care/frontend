import { Box, VStack } from '@chakra-ui/react';

import WhatIsItSection from './WhatIsItSection';
import HowItWorks from './HowItWorks';

const ProductContentSection = (): JSX.Element => (
	<VStack
		spacing={{ base: '48px', xl: '128px' }}
		p={{ base: '32px 32px', md: '32px 64px', xl: '64px 128px' }}
		w="100%"
	>
		<WhatIsItSection />
		<Box w="100%" h="1px" bg="white" />
		<HowItWorks />
	</VStack>
);

export default ProductContentSection;
