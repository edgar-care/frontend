import { Box, Button, HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image, Link } from '@chakra-ui/next-js';

import HighlightText from 'components/HighlightText';

import { APP_URL } from 'config/constants';

const CatchPhraseSection = (): JSX.Element => {
	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" spacing="64px" align="start">
			<HStack w="100%" spacing="64px">
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
							Un Français attend en moyenne 6 jours avant d'avoir un rendez-vous chez un médecin
							généraliste.
						</Text>
					</VStack>
				</VStack>
				{imageDisplayed && (
					<Image
						src="/assets/Edgars/edgar-high-five.svg"
						alt="edgar-high-five-image"
						height={250}
						width={233}
						id="edgar-homePage-highFiveEdgar-img"
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
