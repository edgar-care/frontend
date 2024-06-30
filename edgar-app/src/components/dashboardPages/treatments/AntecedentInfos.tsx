import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const AntecedentInfos = ({ antecedent }: { antecedent: PatientMedicalAntecedentType }): JSX.Element => (
	<VStack
		w="100%"
		maxW={{ base: '100%', '2xl': '400px' }}
		p="16px"
		justify="space-between"
		bg="white"
		borderRadius="16px"
		border="2px solid"
		borderColor="blue.200"
	>
		<VStack spacing="24px">
			<VStack spacing="12px" align="start">
				<Text fontSize="16" fontWeight="600">
					Votre sujet de santé est-il toujours en cours ? {antecedent.name}
				</Text>
				<HStack spacing="16px">
					<Button size="md" variant="primary">
						Oui
					</Button>
					<Button size="md" variant="secondary">
						Non
					</Button>
				</HStack>
			</VStack>
		</VStack>
	</VStack>
);

export default AntecedentInfos;
