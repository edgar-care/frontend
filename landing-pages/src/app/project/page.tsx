'use client';

import { VStack } from '@chakra-ui/react';

import Footer from 'components/navigation/footer/Footer';
import NavBar from 'components/navigation/NavBar';

import ProductContentSection from 'components/productPage/ProductContentSection';
import ProductMilestones from 'components/productPage/milestone/ProductMilestones';

const ProductPage = (): JSX.Element => (
	<VStack
		bg="white"
		borderStyle="solid"
		borderWidth={{ base: '0px', xl: '0px 1px' }}
		borderColor="blue.200"
		spacing="32px"
		justify="space-between"
		w="100%"
		minH="100vh"
	>
		<VStack
			py="32px"
			spacing="32px"
			bg="blue.700"
			borderRadius={{ base: '0px 0px 32px 32px', xl: '0px 0px 48px 48px' }}
			w="100%"
		>
			<NavBar variant="blue" />
			<ProductContentSection />
		</VStack>
		<ProductMilestones />
		<Footer />
	</VStack>
);

export default ProductPage;
