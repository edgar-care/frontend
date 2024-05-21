import { Skeleton, Text, VStack } from '@chakra-ui/react';

import DiagnosticTitleCard from 'components/app/dashboardPages/diagnostics/DiagnosticTitleCard';

import { type DiagnosticSummaryLogType } from 'types/app/dashboard/diagnostics/DiagnosticSummaryType';

import FileIcon from 'assets/icons/FileIcon';

const DiagnosticLogs = ({
	logs,
	isLoading,
}: {
	logs: DiagnosticSummaryLogType[] | undefined;
	isLoading: boolean;
}): JSX.Element => (
	<VStack w="100%" minW="300px">
		<DiagnosticTitleCard title="Retranscription du chat" icon={FileIcon} />
		<Skeleton isLoaded={!isLoading && logs !== undefined} w="100%" h="100%" borderRadius="8px">
			{logs && (
				<VStack w="100%" h="100%" maxH="500px" overflowY="auto" spacing="16px" align="start">
					{logs.map((log, index) => (
						<VStack key={index} w="100%" spacing="16px">
							<VStack w="100%" align="start" pr="16px">
								<Text p="8px 16px" bg="green.100" borderRadius="12px">
									{log.question}
								</Text>
							</VStack>
							<VStack w="100%" align="end" pl="16px">
								<Text p="8px 16px" bg="blue.200" borderRadius="12px">
									{log.answer}
								</Text>
							</VStack>
						</VStack>
					))}
				</VStack>
			)}
		</Skeleton>
	</VStack>
);

export default DiagnosticLogs;
