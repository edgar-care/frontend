'use client';

import { Stack, useDisclosure, useTimeout, VStack } from '@chakra-ui/react';

import NotificationsHandler from 'components/dashboardPages/notifications-modal/NotificationsHandler';
import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import HomeChatCard from 'components/dashboardPages/home/HomeChatCard';
import HomeAppointmentsCard from 'components/dashboardPages/home/HomeAppointmentsCard';

const DashboardContent = (): JSX.Element => {
	const {
		isOpen: isOpenNotificationsModal,
		onOpen: onOpenNotificationsModal,
		onClose: onCloseNotificationsModal,
	} = useDisclosure();

	useTimeout(() => {
		onOpenNotificationsModal();
	}, 5000);

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Bienvenue sur votre espace patient"
				subTitle="Retrouvez toutes vos informations médicales à un seul endroit."
			/>
			<Stack direction={{ base: 'column', lg: 'row' }} w="100%" align="start" spacing="32px">
				<HomeAppointmentsCard />
				<HomeChatCard />
			</Stack>
			<NotificationsHandler isOpen={isOpenNotificationsModal} onClose={onCloseNotificationsModal} />
		</VStack>
	);
};

export default DashboardContent;
