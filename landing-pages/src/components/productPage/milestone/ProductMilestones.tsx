import { Box, Text, VStack } from '@chakra-ui/react';

import ProductTeam from '../ProductTeam';
import MilestoneDetails from './MilestoneDetails';
import ProductNewsletter from '../ProductNewsletter';

const ProductMilestones = (): JSX.Element => (
	<VStack p={{ base: '32px 32px', md: '32px 64px', xl: '96px 128px' }} spacing="64px" w="100%">
		<VStack spacing="32px" w="100%" id="milestones">
			<Text size={{ base: '3xl', xl: '6xl' }} id="edgar-productPage-milestonesTitle-text">
				Les milestones d'edgar
			</Text>
			<MilestoneDetails />
		</VStack>
		<Box w="100%" h="1px" bg="blue.400" />
		<ProductTeam />
		<Box w="100%" h="1px" bg="blue.400" />
		<ProductNewsletter />
	</VStack>
);

export default ProductMilestones;
