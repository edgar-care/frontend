'use client';

import { Box, VStack } from '@chakra-ui/react';

import NavBar from 'components/navigation/NavBar';
import Footer from 'components/navigation/footer/Footer';

import ContactLinkedInSection from 'components/contactPage/ContactLinkedInSection';
import ContactNewsletterSection from 'components/contactPage/ContactNewsletterSection';
import ContactFormSection from 'components/contactPage/ContactFormSection';

const ContactPage = (): JSX.Element => (
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
		<NavBar variant="white" />
		<VStack
			w="100%"
			spacing={{ base: '64px', md: '96px' }}
			p={{ base: '32px 32px', md: '32px 64px', xl: '64px 128px' }}
		>
			<ContactLinkedInSection />
			<Box w="100%" h="1px" bg="blue.400" />
			<ContactNewsletterSection />
			<Box w="100%" h="1px" bg="blue.400" />
			<ContactFormSection />
		</VStack>
		<Footer />
	</VStack>
);

export default ContactPage;
