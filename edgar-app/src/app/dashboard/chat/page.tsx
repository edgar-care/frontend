import ChatPageContent from 'app/dashboard/chat/content';
import ChatProvider from 'app/dashboard/chat/ChatProvider';

const ChatPage = (): JSX.Element => (
	<ChatProvider>
		<ChatPageContent />
	</ChatProvider>
);

export default ChatPage;
