import { createContext, useContext } from 'react';

import Chat from 'libs/chat';

import { type ChatType } from 'types/app/dashboard/chat/ChatType';

type ChatContextType = { chats: ChatType[]; actions: Chat } | undefined;

const ChatContext = createContext<ChatContextType>(undefined);

const useChatContext = () => {
	const context = useContext(ChatContext);
	if (!context) throw new Error('Context used outside of provider.');
	return context;
};

export type { ChatContextType };
export { useChatContext };
export default ChatContext;
