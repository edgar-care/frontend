import { Icon, Text, VStack } from '@chakra-ui/react';

import CheckCircleIllustration from 'assets/illustrations/CheckCircleIllustration';

const DiagnosticValidateModalContent = (): JSX.Element => (
	<VStack spacing="32px" w="100%">
		<VStack>
			<Icon as={CheckCircleIllustration} w="48px" h="48px" />
			<VStack>
				<Text size="xl">Êtes-vous sûr ?</Text>
				<Text maxW="350px" align="center" color="grey.500">
					En acceptant ce rendez-vous, vous assurez l’utilité de celui-ci auprès de votre patient.
				</Text>
			</VStack>
		</VStack>
	</VStack>
);

export default DiagnosticValidateModalContent;
