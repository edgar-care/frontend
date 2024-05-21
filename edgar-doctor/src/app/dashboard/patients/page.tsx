import PatientsPageContent from 'app/dashboard/patients/content';
import ChatProvider from 'app/dashboard/chat/ChatProvider';

const PatientsPage = (): JSX.Element => (
	<ChatProvider>
		<PatientsPageContent />
	</ChatProvider>
);

export default PatientsPage;
