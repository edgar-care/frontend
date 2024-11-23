import { Box, HStack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import HealthIssueCard from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/HealthIssueCard';

import type { HealthIssuesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

const DiagnosticMedicalInfoPersonal = ({ healthIssues }: { healthIssues: HealthIssuesType[] }): JSX.Element => (
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
				{healthIssues.map((healthIssue) => (
					<WrapItem key={healthIssue.id}>
						<HealthIssueCard healthIssue={healthIssue} />
					</WrapItem>
				))}
			</Wrap>
		</VStack>
	</HStack>
);

export default DiagnosticMedicalInfoPersonal;
