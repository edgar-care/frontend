import { createContext, useContext } from 'react';

import Chat from 'libs/chat';

type ChatContextType = Chat | undefined;

const ChatContext = createContext<ChatContextType>(undefined);

const useChatContext = (): Chat => {
	const context = useContext(ChatContext);
	if (!context) throw new Error('context used outside of provider.');
	return context;
};

export type { ChatContextType };
export { useChatContext };
export default ChatContext;
