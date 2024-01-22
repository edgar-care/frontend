import { Stack, VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';

const DashboardContent = (): JSX.Element => (
	<VStack w="100%" spacing="32px">
		<DashboardPageBanner
			title="Mes rendez-vous"
			subTitle="Retrouvez toutes les informations liées à vos rendez-vous."
		/>
		<Stack direction={{ base: 'column', lg: 'row' }} w="100%" align="start" spacing={{ base: '32px', xl: '64px' }}>
			<></>
		</Stack>
	</VStack>
);

export default DashboardContent;
