import { useBreakpointValue } from '@chakra-ui/react';

import NotificationsDrawer from 'components/dashboardPages/notifications-modal/NotificationsDrawer';
import NotificationsModal from 'components/dashboardPages/notifications-modal/NotificationsModal';

const NotificationsHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<NotificationsDrawer isOpen={isOpen} onClose={onClose} />
			) : (
				<NotificationsModal isOpen={isOpen} onClose={onClose} />
			)}
		</>
	);
};

export default NotificationsHandler;
