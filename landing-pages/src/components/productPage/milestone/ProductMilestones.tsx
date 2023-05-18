import { Box, VStack } from '@chakra-ui/react';

import MilestoneRoadmap from './MilestoneRoadmap';
import MilestoneDetails from './MilestoneDetails';
import ProductNewsletter from '../ProductNewsletter';

const ProductMilestones = (): JSX.Element => (
	<VStack p={{ base: '32px 32px', md: '32px 64px', xl: '96px 128px' }} spacing="96px" w="100%">
		<VStack spacing="64px" w="100%">
			<MilestoneRoadmap />
			<Box w="100%" h="1px" bg="blue.400" />
			<MilestoneDetails />
		</VStack>
		<Box w="100%" h="1px" bg="blue.400" />
		<ProductNewsletter />
	</VStack>
);

export default ProductMilestones;
