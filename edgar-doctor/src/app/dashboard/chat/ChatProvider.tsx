'use client';

import { useEffect, useRef, useState } from 'react';
import { useTimeout } from '@chakra-ui/react';

import ChatContext from 'contexts/chat';

import Chat from 'libs/chat';

import { type ChatType } from 'types/app/dashboard/chat/ChatType';

const ChatProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [chats, setChats] = useState<ChatType[]>([]);
	const chat = useRef<Chat | null>(null);

	if (!chat.current) chat.current = new Chat(setChats);

	useTimeout(() => {
		if (chat.current?.getSocketState() === WebSocket.OPEN) chat.current.makeReady();
	}, 1000);

	useEffect(
		() => () => {
			if (chat.current?.getSocketState() === WebSocket.OPEN) chat.current.closeSocket();
		},
		[chat],
	);

	return <ChatContext.Provider value={{ chats, actions: chat.current }}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
