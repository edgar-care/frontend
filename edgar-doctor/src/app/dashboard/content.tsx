import { Stack, useBreakpointValue, VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';
import HomeAppointmentsCard from 'components/app/dashboardPages/home/HomeAppointmentsCard';
import HomeChatCard from 'components/app/dashboardPages/home/HomeChatCard';
import HomeNextAppointmentsCard from 'components/app/dashboardPages/home/HomeNextAppointmentsCard';
import HomeDiagnosticsCard from 'components/app/dashboardPages/home/HomeDiagnosticsCard';

const DashboardContent = (): JSX.Element => {
	const isSmallScreen = useBreakpointValue({ base: false, lg: true, xl: false });

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Bienvenue sur votre espace médecin"
				subTitle="Retrouvez toutes vos informations nécessaires à votre pratique à un seul endroit."
			/>
			<Stack
				direction={{ base: 'column', lg: 'row' }}
				w="100%"
				align="start"
				spacing={{ base: '16px', lg: '32px' }}
			>
				<VStack spacing={{ base: '16px', lg: '32px' }}>
					<HomeAppointmentsCard />
					{isSmallScreen && <HomeChatCard />}
				</VStack>
				<VStack w="100%" spacing={{ base: '16px', lg: '32px' }}>
					<HomeNextAppointmentsCard />
					<Stack
						direction={{ base: 'column', '3xl': 'row' }}
						w="100%"
						align="start"
						spacing={{ base: '16px', lg: '32px' }}
					>
						{!isSmallScreen && <HomeChatCard />}
						<HomeDiagnosticsCard />
					</Stack>
				</VStack>
			</Stack>
		</VStack>
	);
};

export default DashboardContent;
