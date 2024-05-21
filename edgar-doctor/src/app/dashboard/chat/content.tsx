'use client';

import { useEffect, useState } from 'react';
import { HStack, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';
import ChatRecipientsList from 'components/app/dashboardPages/chat/ChatRecipientsList';
import ChatMessagesHandler from 'components/app/dashboardPages/chat/ChatMessagesHandler';

import { useChatContext } from 'contexts/chat';

const ChatPageContent = (): JSX.Element => {
	const { chats } = useChatContext();

	const [selectedChatId, setSelectedChatId] = useState('');

	const searchParams = useSearchParams();

	const isRecipientListDisplayed = useBreakpointValue({ base: false, '2xl': true });

	useEffect(() => {
		if (searchParams.get('chatId')) setSelectedChatId(searchParams.get('chatId') || '');
	}, [searchParams.get('chatID')]);

	return (
		<VStack w="100%" spacing="32px" h="100%">
			<DashboardPageBanner
				title="Ma messagerie"
				subTitle="Retrouvez tous vos messages avec les personnels de santé."
			/>
			<HStack w="100%" spacing="32px" h="100%" align="start" overflowY="hidden">
				{(isRecipientListDisplayed || !selectedChatId) && (
					<ChatRecipientsList chats={chats} setSelectedChatId={setSelectedChatId} />
				)}
				{(isRecipientListDisplayed || selectedChatId) && (
					<ChatMessagesHandler
						chat={chats.find((chat) => chat.id === selectedChatId)}
						setSelectedChatId={setSelectedChatId}
					/>
				)}
			</HStack>
		</VStack>
	);
};

export default ChatPageContent;
