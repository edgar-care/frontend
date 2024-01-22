'use client';

import { VStack } from '@chakra-ui/react';

import Agenda from 'components/app/dashboardPages/agenda/Agenda';
import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';

const AgendaPageContent = (): JSX.Element => (
	<VStack w="100%" spacing="32px" h="100%">
		<DashboardPageBanner
			title="Mon agenda"
			subTitle="Plannifiez vos journées grâce à votre agenda en temps réel."
		/>
		<Agenda />
	</VStack>
);

export default AgendaPageContent;
