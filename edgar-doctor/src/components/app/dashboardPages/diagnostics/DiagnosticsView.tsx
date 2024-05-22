import { useState } from 'react';
import { Text, VStack } from '@chakra-ui/react';

import DiagnosticCard from 'components/app/dashboardPages/diagnostics/DiagnosticCard';
import Pagination from 'components/navigation/Pagination';

import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';
import paginationHandler from 'utils/navigation/paginationHandler';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const DiagnosticsView = ({ title, diagnostics }: { title: string; diagnostics: AppointmentType[] }): JSX.Element => {
	const [pageIndex, setPageIndex] = useState(1);

	return (
		<VStack w="100%" h="100%" spacing="16px" align="start">
			<Text size="boldXl">{title}</Text>
			<VStack w="100%" h="100%" justify="space-between">
				<VStack w="100%">
					{paginationHandler(
						diagnostics.sort((a, b) => a.startDate - b.startDate),
						pageIndex,
						7,
					).map((diagnostic) => (
						<DiagnosticCard key={diagnostic.id} diagnostic={diagnostic} />
					))}
				</VStack>
				{diagnostics.length > 7 && (
					<Pagination
						pageIndex={pageIndex}
						maxPageNumbers={countMaxNumberPage(diagnostics, 7)}
						setPageIndex={setPageIndex}
						size="small"
						variant="secondary"
					/>
				)}
			</VStack>
		</VStack>
	);
};

export default DiagnosticsView;
