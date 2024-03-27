import { useEffect, useState } from 'react';

import { VStack, Box, Button, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';

import ChatCard from 'components/dashboardPages/home/ChatCard';

import ChatIcon from 'assets/icons/ChatIcon';

import { MessageType } from 'types/dashboard/home/MessageType';

const HomeChatCard = (): JSX.Element => {
	const [messages, setMessages] = useState<MessageType[]>([
		{ id: 1, sender: 'John', notifications: 12, date: new Date().getTime(), lastMessage: 'Salut, ça va ?' },
		{ id: 2, sender: 'Alice', notifications: 5, date: new Date().getTime(), lastMessage: 'Coucou !' },
		{ id: 3, sender: 'Bob', notifications: 0, date: new Date().getTime(), lastMessage: 'Demain à quelle heure ?' },
	]);

	useEffect(() => {
		const newMessage = {
			id: messages.length + 1,
			sender: 'New Sender',
			notifications: 0,
			date: new Date().getTime(),
			lastMessage: 'New Message',
		};
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	}, []);

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
			{messages.length > 0 ? (
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
							{messages.length === 1
								? 'Vous avec 1 message non lu'
								: `Vous avez ${messages.length} messages non lus`}
						</Text>
					</HStack>
					<VStack w="100%" spacing="8px">
						{messages?.map((message) => <ChatCard key={message.id} message={message} />)}
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
