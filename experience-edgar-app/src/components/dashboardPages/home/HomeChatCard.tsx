import { VStack, Box, Button, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ChatCard from 'components/dashboardPages/chat/ChatCard';

import { useAuthContext } from 'contexts/auth';
import { useChatContext } from 'contexts/chat';

import getLastUnseenMessage from 'utils/app/dashboard/chat/getLastUnseenMessage';

import ChatIcon from 'assets/icons/ChatIcon';

const HomeChatCard = (): JSX.Element => {
	const { auth } = useAuthContext();
	const { chats } = useChatContext();

	const router = useRouter();

	const unseenChat = chats.filter((chat) => {
		const userLastSeen =
			chat?.participants.find((participant) => participant.participantId === auth.getId())?.lastSeen ||
			new Date('2024-01-01').getTime();
		const lastUnseenMessage = getLastUnseenMessage(chat.messages, userLastSeen);

		return lastUnseenMessage !== undefined;
	});

	return (
		<VStack spacing="16px" w="100%" bg="white" borderRadius="16px" p="16px" border="2px" borderColor="blue.200">
			<VStack w="100%" align="start">
				<Text size="boldXl">Ma messagerie</Text>
				<Box w="100%" h="2px" bg="blue.700" />
			</VStack>
			<Box w="100%">
				<Link href="/dashboard/chat">
					<Button w="100%" size="customLg" id="edgar-dashboardHomePage-chat-button">
						Commencer une nouvelle conversation
					</Button>
				</Link>
			</Box>
			{unseenChat.length > 0 ? (
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
