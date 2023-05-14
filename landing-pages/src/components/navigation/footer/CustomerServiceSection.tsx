import { Box, Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const CustomerServiceSection = (): JSX.Element => (
	<VStack align="start" spacing="16px">
		<Text size={{ base: 'boldLg', xl: 'boldXl' }} color="white" id="edgar-footer-CSTitle-text">
			SERVICE CLIENT
		</Text>
		<VStack w="100%" align="start" spacing="12px">
			<Link href="/contact">
				<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-CSContactUs-text">
					Contactez-nous
				</Text>
			</Link>
			<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-CSPolicies-text">
				Politique de confidentialité -{' '}
				<Box as="i" fontSize="14px" fontWeight="400">
					bientôt
				</Box>
			</Text>
			<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-CSLegals-text">
				Mentions légales -{' '}
				<Box as="i" fontSize="14px" fontWeight="400">
					bientôt
				</Box>
			</Text>
		</VStack>
	</VStack>
);

export default CustomerServiceSection;
