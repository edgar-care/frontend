import { useState } from 'react';
import { Box, Button, HStack, Input, Stack, Text, useBreakpointValue, useToast, VStack } from '@chakra-ui/react';
import { Image, Link } from '@chakra-ui/next-js';

import subscribeToNewsletter from 'utils/subscribeToNewsletter';

import HighlightText from '../HighlightText';

const ProductNewsletter = (): JSX.Element => {
	const [newsletterEmail, setNewsletterEmail] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" spacing="0px" align="start">
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
			<VStack maxW="400px" align="start" spacing="16px">
				<Input
					type="email"
					w="100%"
					value={newsletterEmail}
					placeholder="prenom.nom@gmail.com"
					border="2px solid"
					borderColor="green.500"
					_placeholder={{
						color: 'gray.400',
					}}
					_hover={{
						borderColor: 'green.500',
					}}
					onChange={(e) => setNewsletterEmail(e.target.value)}
					id="edgar-productPage-newsletterEmail-input"
				/>
				<Stack direction={{ base: 'column', xl: 'row' }} justify="space-between" w="100%">
					<Text maxW="240px" id="edgar-productPage-newsletterPolicies-text">
						En vous abonnant, vous acceptez notre{' '}
						<Link href="">
							<Box as="u">politique de confidentialité</Box>
						</Link>
					</Text>
					<Button
						variant="primary"
						onClick={() => {
							subscribeToNewsletter(newsletterEmail).then((res) => {
								toast(res);
								if (res.status !== 'error') setNewsletterEmail('');
							});
						}}
						id="edgar-productPage-newsletterSubscription-button"
					>
						M'abonner
					</Button>
				</Stack>
			</VStack>
		</VStack>
	);
};

export default ProductNewsletter;
