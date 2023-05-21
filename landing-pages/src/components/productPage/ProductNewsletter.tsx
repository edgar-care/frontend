import { Box, HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import HighlightText from '../HighlightText';
import NewsletterForm from '../NewsletterForm';

const ProductNewsletter = (): JSX.Element => {
	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" spacing={imageDisplayed ? '0px' : '16px'} align="start">
			<HStack w="100%" spacing="64px">
				<VStack align="start" w="100%" spacing="32px">
					<Text
						size={{ base: '3xl', lg: '6xl', '2xl': '7xl' }}
						id="edgar-productPage-newsletterCatchPhrase-text"
					>
						Envie <HighlightText>d'essayer ?</HighlightText>
					</Text>
					<VStack align="start" maxW="1200px" spacing="24px">
						<Text size={{ base: 'lg', lg: '2xl' }} id="edgar-productPage-newsletterSubTitle1-text">
							Abonnez-vous à notre newsletter et obtenez un{' '}
							<Box as="span" fontWeight="600" color="green.600">
								accès anticipé
							</Box>{' '}
							à notre beta lors de son ouverture.
						</Text>
					</VStack>
				</VStack>
				{imageDisplayed && (
					<Image
						src="/assets/Edgars/edgar-hushed-holding-mail.svg"
						alt="edgar-thinking-image"
						height={250}
						width={210}
						id="edgar-productPage-thinkingEdgar-img"
					/>
				)}
			</HStack>
			<NewsletterForm variant="white" id="productPage" />
		</VStack>
	);
};

export default ProductNewsletter;
