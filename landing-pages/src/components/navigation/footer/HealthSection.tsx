import { Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const HealthSection = (): JSX.Element => (
	<VStack align="start" spacing="16px">
		<Text size={{ base: 'boldLg', xl: 'boldXl' }} color="white" id="edgar-footer-healthTitle-text">
			VOTRE SANTÉ
		</Text>
		<VStack w="100%" align="start" spacing="12px">
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-healthAppointment-text">
					Prendre un rendez-vous
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-healthPatientArea-text">
					Accédez à mon espace patient
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-healthFindDoctor-text">
					Trouvez un médecin
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-healthNationalDoctorOrder-text">
					Ordre National des Médecins
				</Text>
			</Link>
		</VStack>
	</VStack>
);

export default HealthSection;
