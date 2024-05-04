'use client';

import { useEffect, useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import ChatRecipientsList from 'components/dashboardPages/chat/ChatRecipientsList';
import ChatMessagesHandler from 'components/dashboardPages/chat/ChatMessagesHandler';

import { type ChatType } from 'types/dashboard/chat/ChatType';

const ChatPageContent = (): JSX.Element => {
	const [selectedChatId, setSelectedChatId] = useState('');
	const chats: ChatType[] = [
		{
			id: '1',
			messages: [
				{
					message: 'Hello',
					ownerId: '1',
					sentTime: 1630512000,
				},
				{
					message: 'Hi',
					ownerId: '2',
					sentTime: 1630512000,
				},
			],
			participants: [
				{
					participantId: '66339682c58e46d31358dcf9',
					lastSeen: 1630512000,
				},
				{
					participantId: '65fa05bf3c449dfabded7f24',
					lastSeen: 1630512000,
				},
			],
		},
		{
			id: '2',
			messages: [
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706555644000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '65feebafd238ecea17cc0f4b',
					sentTime: 1706508844000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '65feebafd238ecea17cc0f4b',
					sentTime: 1706260204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
				{
					message:
						'Bonjour Monsieur X,\n' +
						'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
					ownerId: '66339682c58e46d31358dcf9',
					sentTime: 1706278204000,
				},
			],
			participants: [
				{
					participantId: '66339682c58e46d31358dcf9',
					lastSeen: 1706555644000,
				},
				{
					participantId: '65feebafd238ecea17cc0f4b',
					lastSeen: 1630512000000,
				},
			],
		},
	];

	const searchParams = useSearchParams();

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
				<ChatRecipientsList chats={chats} setSelectedChatId={setSelectedChatId} />
				<ChatMessagesHandler chat={chats.find((chat) => chat.id === selectedChatId)} />
			</HStack>
		</VStack>
	);
};

export default ChatPageContent;
