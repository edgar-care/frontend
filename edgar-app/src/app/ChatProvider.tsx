'use client';

import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import ChatContext from 'contexts/chat';

import Chat from 'libs/chat';
// TODO: need to clean after simulation flow refactor
const ChatProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [chat] = useState<Chat>(new Chat());

	const toast = useToast({ duration: 2000, isClosable: true });

	if (!chat)
		toast({
			title: 'Une erreur est survenue',
			status: 'error',
		});

	return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
