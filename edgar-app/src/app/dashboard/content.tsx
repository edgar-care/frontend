'use client';

import { Stack, VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import HomeChatCard from 'components/dashboardPages/home/HomeChatCard';
import HomeAppointmentsCard from 'components/dashboardPages/home/HomeAppointmentsCard';
import HomeTreatmentsCard from 'components/dashboardPages/home/HomeTreatmentsCard';

const DashboardContent = (): JSX.Element => (
	<VStack w="100%" spacing="32px">
		<DashboardPageBanner
			title="Bienvenue sur votre espace patient"
			subTitle="Retrouvez toutes vos informations médicales à un seul endroit."
		/>
		<Stack direction={{ base: 'column', lg: 'row' }} w="100%" align="start" spacing="32px">
			<HomeAppointmentsCard />
			<HomeChatCard />
			<HomeTreatmentsCard />
		</Stack>
		{/* <ModalHandler
			isOpen={isOpenNotificationsModal}
			onClose={onCloseNotificationsModal}
			size="3xl"
			headerTitle="Activez les notifications"
			headerSubtitle="Activez les notifications pour recevoir des rappels et des informations importantes
									sur votre santé."
			headerIcon={NotificationsIllustration}
			footerPrimaryButton={
				<Button
					w="100%"
					variant="validate"
					id="edgar-notificationsModal-yes-button"
					onClick={onCloseNotificationsModal}
				>
					J’active les notifications
				</Button>
			}
			footerSecondaryButton={
				<Button
					variant="secondary"
					w="100%"
					id="edgar-notificationsModal-no-button"
					onClick={onCloseNotificationsModal}
				>
					Je ne les active pas
				</Button>
			}
		/> */}
	</VStack>
);

export default DashboardContent;
