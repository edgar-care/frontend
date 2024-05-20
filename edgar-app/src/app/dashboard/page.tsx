import DashboardContent from 'app/dashboard/content';
import ChatProvider from 'app/dashboard/chat/ChatProvider';

const DashboardPage = (): JSX.Element => (
	<ChatProvider>
		<DashboardContent />
	</ChatProvider>
);

export default DashboardPage;
