import { VStack, Box, Button, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ChatCard from 'components/dashboardPages/chat/ChatCard';

import { useAuthContext } from 'contexts/auth';

import getLastUnseenMessage from 'utils/app/dashboard/chat/getLastUnseenMessage';

import ChatIcon from 'assets/icons/ChatIcon';

import { type ChatType } from 'types/dashboard/chat/ChatType';

const HomeChatCard = (): JSX.Element => {
	const auth = useAuthContext();

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
					lastSeen: 1706278204000,
				},
				{
					participantId: '65feebafd238ecea17cc0f4b',
					lastSeen: 1630512000000,
				},
			],
		},
	];

	const router = useRouter();

	const unseenChat = chats.filter((chat) => {
		const userLastSeen =
			chat?.participants.find((participant) => participant.participantId === auth.getId())?.lastSeen ||
			new Date('2024-01-01').getTime();
		const lastUnseenMessage = getLastUnseenMessage(chat.messages, userLastSeen);

		return lastUnseenMessage !== undefined;
	});

	return (
		<VStack
			spacing="16px"
			w={{ base: '100%', md: 'auto' }}
			bg="white"
			borderRadius="16px"
			p="16px"
			border="2px"
			borderColor="blue.200"
		>
			<Box w="100%">
				<Link href="/dashboard/chat">
					<Button w="100%" size="customLg" id="edgar-dashboardHomePage-chat-button">
						Commencer une nouvelle conversation
					</Button>
				</Link>
			</Box>
			<Box w="100%" h="2px" bg="blue.700" />
			{chats.length > 0 ? (
				<>
					<HStack
						w="100%"
						borderRadius="16px"
						border="2px"
						borderColor="green.400"
						bg="green.200"
						p="16px"
						spacing="8px"
						justify="center"
					>
						<Icon as={ChatIcon} w="20px" h="19px" color="green.700" />
						<Text size="boldMd" color="green.700">
							{unseenChat.length === 1
								? 'Vous avec 1 conversation non lue'
								: `Vous avez ${unseenChat.length} conversations non lues`}
						</Text>
					</HStack>
					<VStack w="100%" spacing="8px">
						{unseenChat?.map((chat) => (
							<ChatCard
								key={chat.id}
								chat={chat}
								onClick={() => {
									router.push(`/dashboard/chat?chatId=${chat.id}`);
								}}
							/>
						))}
					</VStack>
				</>
			) : (
				<HStack
					w="100%"
					borderRadius="16px"
					border="2px"
					borderColor="blue.300"
					bg="blue.200"
					p="16px"
					spacing="8px"
					justify="center"
				>
					<Icon as={ChatIcon} w="20px" h="19px" color="blue.700" />
					<Text size="boldMd" color="blue.700">
						Vous n'avez pas de messages non lus
					</Text>
				</HStack>
			)}
		</VStack>
	);
};

export default HomeChatCard;
