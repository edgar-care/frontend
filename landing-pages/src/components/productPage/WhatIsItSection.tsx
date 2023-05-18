import { Box, HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import HighlightText from '../HighlightText';

const WhatIsItSection = (): JSX.Element => {
	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" spacing="64px" align="start">
			<HStack w="100%" spacing="64px">
				<VStack align="start" w="100%" spacing="32px">
					<Text
						size={{ base: '3xl', lg: '6xl', '2xl': '7xl' }}
						color="white"
						id="edgar-productPage-catchPhrase-text"
					>
						edgar <HighlightText>c'est quoi ?</HighlightText>
					</Text>
					<VStack align="start" maxW="1200px" spacing="24px">
						<Text size={{ base: 'lg', lg: '2xl' }} color="white" id="edgar-productPage-subTitle1-text">
							edgar c'est la plateforme qui s'occupe de{' '}
							<Box as="span" fontWeight="600" color="green.400">
								votre santé
							</Box>{' '}
							et celle de{' '}
							<Box as="span" fontWeight="600" color="green.400">
								vos proches
							</Box>
							.
						</Text>
						<Text size={{ base: 'lg', lg: '2xl' }} color="white" id="edgar-productPage-subTitle2-text">
							Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes,
							en France, ces quelques dernières année, un français attend en{' '}
							<Box as="span" fontWeight="600" color="green.400">
								moyenne 6 jours
							</Box>{' '}
							avant d’aller à son rendez-vous médical.
						</Text>
						<Text size={{ base: 'lg', lg: '2xl' }} color="white" id="edgar-productPage-subTitle3-text">
							Chez edgar, nous voulons{' '}
							<Box as="span" fontWeight="600" color="green.400">
								réduire cette durée
							</Box>{' '}
							en diminuant le nombre de rendez-vous inutiles. Ces rendez-vous font{' '}
							<Box as="span" fontWeight="600" color="green.400">
								perdre du temps
							</Box>{' '}
							aux patients, mais aussi aux médecins, qui nous le savons{' '}
							<Box as="span" fontWeight="600" color="green.400">
								sont surchargés
							</Box>
							.
						</Text>
					</VStack>
				</VStack>
				{imageDisplayed && (
					<Image
						src="/assets/Edgars/edgar-thinking.svg"
						alt="edgar-thinking-image"
						height={250}
						width={233}
						id="edgar-productPage-thinkingEdgar-img"
					/>
				)}
			</HStack>
		</VStack>
	);
};

export default WhatIsItSection;
