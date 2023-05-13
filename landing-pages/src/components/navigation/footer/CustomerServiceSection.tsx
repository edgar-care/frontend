import { Box, Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const CustomerServiceSection = (): JSX.Element => (
	<VStack align="start" spacing="16px">
		<Text size={{ base: 'boldLg', xl: 'boldXl' }} color="white">
			SERVICE CLIENT
		</Text>
		<VStack w="100%" align="start" spacing="12px">
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Contactez-nous
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Politique de confidentialité -{' '}
					<Box as="i" fontSize="14px" fontWeight="400">
						bientôt
					</Box>
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Politique de confidentialité -{' '}
					<Box as="i" fontSize="14px" fontWeight="400">
						bientôt
					</Box>
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Ordre National des Médecins
				</Text>
			</Link>
		</VStack>
	</VStack>
);

export default CustomerServiceSection;
