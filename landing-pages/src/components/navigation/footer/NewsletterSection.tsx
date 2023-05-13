import { useState } from 'react';
import { Box, Button, Input, Stack, Text, useToast, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

import subscribeToNewsletter from 'utils/subscribeToNewsletter';

const NewsletterSection = (): JSX.Element => {
	const [newsletterEmail, setNewsletterEmail] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<VStack align="start" maxW="400px" spacing="16px">
			<VStack w="100%" align="start" spacing="0px">
				<Text size={{ base: 'xl', xl: '2xl' }} color="white">
					SUIVEZ NOS ACTUALITÉS !!
				</Text>
				<Text color="white">
					Inscrivez-vous et profitez d’un accès en exclusivité lors de l’ouverture de notre beta
				</Text>
			</VStack>
			<VStack w="100%" align="start" spacing="16px">
				<Input
					type="email"
					w="100%"
					value={newsletterEmail}
					placeholder="prenom.nom@gmail.com"
					textColor="white"
					border="2px solid"
					borderColor="green.500"
					_placeholder={{
						color: 'gray.300',
					}}
					_hover={{
						borderColor: 'green.500',
					}}
					onChange={(e) => setNewsletterEmail(e.target.value)}
				/>
				<Stack direction={{ base: 'column', xl: 'row' }} justify="space-between" w="100%">
					<Text color="white" maxW="240px">
						En vous abonnant, vous acceptez notre{' '}
						<Link href="">
							<Box as="u">politique de confidentialité</Box>
						</Link>
					</Text>
					<Button
						variant="primaryBordered"
						onClick={() => {
							subscribeToNewsletter(newsletterEmail).then((res) => {
								toast(res);
								if (res.status !== 'error') setNewsletterEmail('');
							});
						}}
					>
						M'abonner
					</Button>
				</Stack>
			</VStack>
		</VStack>
	);
};

export default NewsletterSection;
