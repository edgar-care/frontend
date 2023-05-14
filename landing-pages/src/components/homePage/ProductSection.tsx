import { Box, Button, HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image, Link } from '@chakra-ui/next-js';

const ProductSection = (): JSX.Element => {
	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" align="start" spacing="64px">
			<VStack w="100%" align="start" spacing="32px">
				<Text
					size={{ base: 'bold2xl', lg: '4xl', '2xl': '5xl' }}
					color="white"
					id="edgar-homePage-productTitle-text"
				>
					Pourquoi edgar ?
				</Text>
				<HStack w="100%" align="start" justify="space-between" spacing="64px">
					<Text
						size={{ base: 'lg', lg: '2xl' }}
						color="white"
						maxW="1125px"
						id="edgar-homePage-productDescription-text"
					>
						Malgré les améliorations en termes de prise de rendez-vous chez les médecins généralistes, en
						France, ces quelques dernières année, un français attend en{' '}
						<Box as="span" fontWeight="600" color="green.400">
							moyenne 6 jours
						</Box>{' '}
						avant d’aller à son rendez-vous médical.
						<Box as="br" />
						<Box as="br" />
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
							sont surchargés.
						</Box>
					</Text>
					{imageDisplayed && (
						<Image
							src="/assets/Edgars/edgar-thinking.svg"
							alt="edgar-thinking-image"
							width={209}
							height={250}
							id="edgar-homePage-thinkingEdgar-img"
						/>
					)}
				</HStack>
			</VStack>
			<Link href="/product">
				<Button
					size={{ base: 'customLg', xl: '2xl' }}
					variant="primaryBordered"
					id="edgar-homePage-product-button"
				>
					En apprendre plus sur edgar
				</Button>
			</Link>
		</VStack>
	);
};

export default ProductSection;
