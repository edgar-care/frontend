import { Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const HealthSection = (): JSX.Element => (
	<VStack align="start" spacing="16px">
		<Text size={{ base: 'boldLg', xl: 'boldXl' }} color="white">
			VOTRE SANTÉ
		</Text>
		<VStack w="100%" align="start" spacing="12px">
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Prendre un rendez-vous
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Accédez à mon espace patient
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Trouvez un médecin
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

export default HealthSection;
