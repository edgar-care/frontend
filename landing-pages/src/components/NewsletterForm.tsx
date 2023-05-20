import { useState } from 'react';
import { Box, Button, Input, Stack, Text, useToast, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

import subscribeToNewsletter from 'utils/subscribeToNewsletter';

const NewsletterForm = ({ variant, id }: { variant: 'blue' | 'white'; id: string }): JSX.Element => {
	const [newsletterEmail, setNewsletterEmail] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<VStack w={{ base: '100%', sm: '400px' }} align="start" spacing="16px">
			<Input
				type="email"
				w="100%"
				value={newsletterEmail}
				placeholder="prenom.nom@gmail.com"
				textColor={variant === 'blue' ? 'white' : 'black'}
				border="2px solid"
				borderColor="green.500"
				borderRadius="12px"
				_placeholder={{
					color: variant === 'blue' ? 'gray.300' : 'gray.400',
				}}
				_hover={{
					borderColor: 'green.500',
				}}
				onChange={(e) => setNewsletterEmail(e.target.value)}
				id={`edgar-${id}-newsletterEmail-input`}
			/>
			<Stack direction={{ base: 'column', xl: 'row' }} justify="space-between" w="100%">
				<Text
					color={variant === 'blue' ? 'white' : 'black'}
					maxW={{ base: '100%', xl: '240px' }}
					id={`edgar-${id}-newsletterPolicies-text`}
				>
					En vous abonnant, vous acceptez notre{' '}
					<Link href="">
						<Box as="u">politique de confidentialité</Box>
					</Link>
				</Text>
				<Button
					variant={variant === 'blue' ? 'primaryBordered' : 'primary'}
					onClick={() => {
						subscribeToNewsletter(newsletterEmail).then((res) => {
							toast(res);
							if (res.status !== 'error') setNewsletterEmail('');
						});
					}}
					id={`edgar-${id}-newsletterSubscription-button`}
				>
					M'abonner
				</Button>
			</Stack>
		</VStack>
	);
};

export default NewsletterForm;
