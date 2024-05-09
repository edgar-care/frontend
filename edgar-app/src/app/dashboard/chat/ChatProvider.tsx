'use client';

import { useState } from 'react';

import ChatContext from 'contexts/chat';

import Chat from 'libs/chat';

import { type ChatType } from 'types/dashboard/chat/ChatType';

const ChatProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [chats, setChats] = useState<ChatType[]>([]);
	const [chat] = useState<Chat>(new Chat(setChats));

	return <ChatContext.Provider value={{ chats, actions: chat }}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
