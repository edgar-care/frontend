import { Skeleton, VStack } from '@chakra-ui/react';

import DiagnosticTitleCard from 'components/app/dashboardPages/diagnostics/DiagnosticTitleCard';
import DiagnosticSummarySuggestedDiseasesCard from 'components/app/dashboardPages/diagnostics/summary/DiagnosticSummarySuggestedDiseasesCard';
import DiagnosticSummarySymptoms from 'components/app/dashboardPages/diagnostics/summary/DiagnosticSummarySymptoms';

import HeartPulseIcon from 'assets/icons/HeartPulseIcon';

import { type DiagnosticSummaryType } from 'types/app/dashboard/diagnostics/DiagnosticSummaryType';

const DiagnosticSummary = ({
	summary,
	isLoading,
}: {
	summary: DiagnosticSummaryType | undefined;
	isLoading: boolean;
}): JSX.Element => (
	<VStack w="100%">
		<DiagnosticTitleCard title="Diagnostic" icon={HeartPulseIcon} />
		<Skeleton isLoaded={!isLoading && summary !== undefined} w="100%" h="100%" borderRadius="8px">
			{summary && (
				<VStack w="100%" spacing="16px" align="start">
					<DiagnosticSummarySuggestedDiseasesCard
						fiability={summary.fiability}
						suggestedDiseases={summary.diseases}
					/>
					<DiagnosticSummarySymptoms
						title="Symptômes présents"
						suggestedSymptoms={summary.symptoms.filter((symptom) => symptom.presence === true)}
					/>
					<DiagnosticSummarySymptoms
						title="Symptômes non présents"
						suggestedSymptoms={summary.symptoms.filter((symptom) => symptom.presence === false)}
					/>
					<DiagnosticSummarySymptoms
						title="Symptômes potentiellement présents"
						suggestedSymptoms={summary.symptoms.filter((symptom) => symptom.presence === null)}
					/>
				</VStack>
			)}
		</Skeleton>
	</VStack>
);

export default DiagnosticSummary;
