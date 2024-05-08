'use client';

import { Box, Button, Img, Link, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

import Footer from 'components/navigation/footer/Footer';
import NavBar from 'components/navigation/NavBar';
import HighlightText from 'components/HighlightText';

const ApplicationPage = (): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
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
				<VStack spacing="32px" w="100%" align="start">
					<Text size={{ base: '5xl', lg: '6xl', '2xl': '7xl' }} id="edgar-applicationPage-title-text">
						edgar sur <HighlightText>mobile</HighlightText>
					</Text>
					<Text size={{ base: 'xl', lg: '2xl' }} maxW="900px" id="edgar-applicationPage-subtitle-text">
						La plateforme s’occupant de{' '}
						<Box as="span" fontWeight="600" color="green.600">
							votre santé
						</Box>{' '}
						et celle de{' '}
						<Box as="span" fontWeight="600" color="green.600">
							vos proches
						</Box>{' '}
						désormais disponible sur Android et bientôt sur iOS.
					</Text>
				</VStack>
				<Stack
					direction={isMobile ? 'column' : 'row'}
					spacing={{ base: '64px', md: '96px', lg: '128px' }}
					align={{ base: 'center', md: 'end' }}
				>
					<VStack spacing="32px">
						<Img
							src="/assets/Edgars/edgar-confused-holding-working.svg"
							alt="edgar-confused-holding-working-image"
							h="325px"
							w="auto"
							id="edgar-applicationPage-edgariOS-image"
						/>
						<Button
							variant="primary"
							size={{ base: 'customLg', xl: 'xl' }}
							id="edgar-applicationPage-iOS-button"
						>
							Bientôt disponible
						</Button>
					</VStack>
					<Box w={isMobile ? '200px' : '1px'} h={isMobile ? '1px' : '400px'} bg="blue.400" />
					<VStack spacing="32px">
						<Img
							src="/assets/Edgars/edgar-simple-smile-holding.svg"
							alt="edgar-simple-smile-holding-image"
							h="250px"
							w="auto"
							id="edgar-applicationPage-edgarAndroid-image"
						/>
						<Link href="https://edgar-care-apk.s3.eu-west-3.amazonaws.com/edgar.apk">
							<Button
								variant="primary"
								size={{ base: 'customLg', xl: 'xl' }}
								id="edgar-applicationPage-android-button"
							>
								Téléchargez moi
							</Button>
						</Link>
					</VStack>
				</Stack>
			</VStack>
			<Footer />
		</VStack>
	);
};

export default ApplicationPage;
