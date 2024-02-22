import { Text, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const PatientsSubViewNoPatient = (): JSX.Element => (
	<VStack
		w="100%"
		h="100%"
		p="16px"
		spacing="16px"
		borderRadius="16px"
		bg="blue.100"
		border="2px solid"
		borderColor="blue.200"
		justify="center"
	>
		<Text size="boldLg" color="blue.950">
			Sélectionner un patient pour accéder à ses informations
		</Text>
		<Image src="/assets/Edgars/edgar-confused.svg" alt="edgar-confused" width={200} height={226} />
	</VStack>
);

export default PatientsSubViewNoPatient;
