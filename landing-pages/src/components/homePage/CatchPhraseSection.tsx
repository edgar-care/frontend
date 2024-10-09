import { Box, Button, HStack, Link, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import HighlightText from 'components/HighlightText';

import { APP_URL } from 'config/constants';

const CatchPhraseSection = (): JSX.Element => {
	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" spacing="64px" align="start">
			<HStack w="100%" spacing="32px" justify="space-between">
				<VStack align="start" w="100%" spacing="32px">
					<Text
						size={{ base: '3xl', lg: '6xl', '2xl': '7xl' }}
						color="white"
						id="edgar-homePage-catchPhrase-text"
					>
						Gagne du temps avec
						<Box as="br" /> l'assistant virtuel du <HighlightText>pré-diagnostic.</HighlightText>
					</Text>
					<VStack align="start" maxW="905px" spacing="0px">
						<Text size={{ base: 'lg', lg: '2xl' }} color="white" id="edgar-homePage-subTitle1-text">
							Marre d'attendre pour{' '}
							<Box as="span" fontWeight="600" color="green.400">
								avoir un rendez-vous
							</Box>{' '}
							chez le médecin généraliste ?
						</Text>
						<Text size={{ base: 'lg', lg: '2xl' }} color="white" id="edgar-homePage-subTitle2-text">
							Un Français attend en moyenne 6 jours avant d'assister à son rendez-vous chez un médecin
							généraliste.
						</Text>
					</VStack>
				</VStack>
				{imageDisplayed && (
					<Image
						src="/assets/mockups/landing-page-mockup.png"
						alt="edgar-high-five-image"
						id="edgar-homePage-highFiveEdgar-img"
						width={1000}
						height={700}
						w="100%"
						maxW={{ base: '300px', lg: '750px' }}
						h="auto"
						priority
					/>
				)}
			</HStack>
			<Link href={`${APP_URL}/simulation`}>
				<Button
					size={{ base: 'customLg', xl: '2xl' }}
					variant="primaryBordered"
					id="edgar-homePage-appointment-button"
				>
					Trouvez votre rendez-vous <Box as="br" />
					dès maintenant
				</Button>
			</Link>
		</VStack>
	);
};

export default CatchPhraseSection;
