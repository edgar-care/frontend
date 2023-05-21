import { Text, VStack } from '@chakra-ui/react';

import NewsletterForm from 'components/NewsletterForm';

const NewsletterSection = (): JSX.Element => (
	<VStack align="start" maxW="400px" spacing="16px">
		<VStack w="100%" align="start" spacing="0px">
			<Text size={{ base: 'xl', xl: '2xl' }} color="white" id="edgar-footer-newsletterTitle-text">
				SUIVEZ NOS ACTUALITÉS !!
			</Text>
			<Text color="white" id="edgar-footer-newsletterSubtitle-text">
				Inscrivez-vous et profitez d'un accès en exclusivité lors de l'ouverture de notre beta
			</Text>
		</VStack>
		<NewsletterForm variant="blue" id="footer" />
	</VStack>
);

export default NewsletterSection;
