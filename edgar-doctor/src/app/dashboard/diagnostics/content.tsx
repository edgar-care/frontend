'use client';

import { VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';
import Diagnostics from 'components/app/dashboardPages/diagnostics/Diagnostics';

const DiagnosticsPageContent = (): JSX.Element => (
	<VStack w="100%" spacing="32px" h="100%">
		<DashboardPageBanner
			title="Mes pré-diagnostics"
			subTitle="Retrouvez tous les pré-diagnostics en attentes liés aux rendez-vous de vos patients."
		/>
		<Diagnostics />
	</VStack>
);

export default DiagnosticsPageContent;
