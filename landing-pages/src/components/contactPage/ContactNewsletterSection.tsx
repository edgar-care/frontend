import { Box, HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import HighlightText from '../HighlightText';
import NewsletterForm from '../NewsletterForm';

const ContactNewsletterSection = (): JSX.Element => {
	const isTitleMultiLines = useBreakpointValue({ base: true, sm: false });
	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" spacing="32px" align="start">
			<HStack w="100%" spacing="64px">
				<VStack spacing="32px" w="100%" align="start">
					<Text size={{ base: '4xl', lg: '6xl', '5xl': '6xl' }} id="edgar-contactPage-newsletterTitle-text">
						{isTitleMultiLines ? (
							<>
								Ou inscrivez vous à <HighlightText>notre</HighlightText>{' '}
								<HighlightText>newsletter</HighlightText>
							</>
						) : (
							<>
								Ou inscrivez vous à <HighlightText>notre newsletter</HighlightText>
							</>
						)}
					</Text>
					<Text size={{ base: 'xl', lg: '2xl' }} maxW="850px" id="edgar-contactPage-newsletterSubtitle-text">
						Recevez par email les news d’edgar en{' '}
						<Box as="span" fontWeight="600" color="green.600">
							exclusivité
						</Box>{' '}
						et en{' '}
						<Box as="span" fontWeight="600" color="green.600">
							BONUS
						</Box>{' '}
						profitez des premières places d’accès à{' '}
						<Box as="span" fontWeight="600" color="green.600">
							notre beta
						</Box>{' '}
						lors de son ouverture.
					</Text>
				</VStack>
				{imageDisplayed && (
					<Image
						src="/assets/Edgars/edgar-hushed-holding-mail.svg"
						alt="edgar-thinking-image"
						height={250}
						width={233}
						id="edgar-contactPage-hushedHoldingMailEdgar-img"
					/>
				)}
			</HStack>
			<VStack spacing="16px" align="start">
				<Text size="lg" maxW="700px" id="edgar-contactPage-newsletterFormTitle-text">
					Avant de vous inscrire, notez bien que nous n’allons malheureusement pas pouvoir vous inonder de
					photos trop mignonnes d’Edgar dans votre newsletter. Désolé 😔
				</Text>
				<NewsletterForm variant="white" id="contactPage" />
			</VStack>
		</VStack>
	);
};

export default ContactNewsletterSection;
