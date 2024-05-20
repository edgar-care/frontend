import { Box, HStack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import MedicalAntecedentsCard from 'components/app/dashboardPages/diagnostics/medicalInfo/medicalAntecedents/MedicalAntecedentsCard';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

const DiagnosticMedicalInfoPersonal = ({
	medicalAntecedents,
}: {
	medicalAntecedents: PatientMedicalAntecedentType[];
}): JSX.Element => (
	<HStack
		p="16px"
		w="100%"
		bg="white"
		border="2px solid"
		borderColor="blue.200"
		spacing="4px"
		borderRadius="8px"
		align="start"
	>
		<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
		<VStack pl="8px" w="100%" align="start" spacing={{ base: '8px', lg: '12px' }}>
			<Text size={{ base: 'md', lg: 'lg' }}>Antécédents médicaux et sujets de santé:</Text>
			<Wrap>
				{medicalAntecedents.map((medicalAntecedent) => (
					<WrapItem key={medicalAntecedent.id}>
						<MedicalAntecedentsCard medicalAntecedent={medicalAntecedent} />
					</WrapItem>
				))}
			</Wrap>
		</VStack>
	</HStack>
);

export default DiagnosticMedicalInfoPersonal;
