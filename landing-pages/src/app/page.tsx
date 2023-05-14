'use client';

import { VStack } from '@chakra-ui/react';

import ContentSections from 'components/homePage/ContentSections';
import Footer from 'components/navigation/footer/Footer';
import NavBar from 'components/navigation/NavBar';
import QASection from 'components/homePage/QASection';

const HomePage = (): JSX.Element => (
	<VStack
		bg="white"
		borderStyle="solid"
		borderWidth={{ base: '0px', xl: '0px 1px' }}
		borderColor="blue.200"
		spacing="96px"
		justify="space-between"
		w="100%"
	>
		<VStack
			py="32px"
			spacing="64px"
			bg="blue.700"
			borderRadius={{ base: '0px 0px 32px 32px', xl: '0px 0px 48px 48px' }}
			w="100%"
		>
			<NavBar />
			<ContentSections />
		</VStack>
		<QASection />
		<Footer />
	</VStack>
);

export default HomePage;
