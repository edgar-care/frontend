import { Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import DiagnosticSymptomCard from 'components/app/dashboardPages/diagnostics/summary/DiagnosticSymptomCard';

import { type DiagnosticSummarySymptomType } from 'types/app/dashboard/diagnostics/DiagnosticSummaryType';

const DiagnosticSummarySymptoms = ({
	title,
	suggestedSymptoms,
}: {
	title: string;
	suggestedSymptoms: DiagnosticSummarySymptomType[];
}): JSX.Element => (
	<VStack w="100%" spacing="4px" align="start">
		<Text size="boldLg">{title}</Text>
		{suggestedSymptoms.length === 0 ? (
			<VStack w="100%" p="16px" bg="blue.100" borderRadius="8px">
				<Text>Aucun symptôme</Text>
			</VStack>
		) : (
			<Wrap w="100%" spacing="4px">
				{suggestedSymptoms.map((symptom) => (
					<WrapItem key={symptom.name}>
						<DiagnosticSymptomCard name={symptom.name} />
					</WrapItem>
				))}
			</Wrap>
		)}
	</VStack>
);

export default DiagnosticSummarySymptoms;
