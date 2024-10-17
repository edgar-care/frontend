import { Text, VStack } from '@chakra-ui/react';

const BetaWarningBanner = (): JSX.Element => (
	<VStack w="100%" p="16px" borderRadius="8px" border="2px solid" borderColor="red.400" bg="red.200">
		<Text>
			Ce projet est uniquement destiné à des fins de démonstration. Ne pouvant garantir la sécurité et
			l’anonymisation de vos données de santé, nous vous demandons de ne pas saisir d’informations personnelles ou
			médicales sensibles.
		</Text>
	</VStack>
);

export default BetaWarningBanner;
