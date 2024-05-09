import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import ChatMessageCard from 'components/dashboardPages/chat/ChatMessageCard';

import { type ChatMessageType } from 'types/dashboard/chat/ChatType';

const ChatMessageGroup = ({
	day,
	messages,
	lastUnseenMessage,
}: {
	day: string;
	messages: ChatMessageType[];
	lastUnseenMessage: ChatMessageType | undefined;
}): JSX.Element => (
	<VStack w="100%">
		<Text w="100%" align="center" textTransform="capitalize" size="boldSm">
			{new Date(day).toLocaleDateString('fr-FR', {
				weekday: 'long',
				month: 'long',
				day: 'numeric',
				year: 'numeric',
			})}
		</Text>
		<VStack w="100%" spacing={{ base: '8px', md: '16px' }}>
			{messages.map((message, index) => (
				<VStack w="100%" key={`${message.ownerId}-${message.sentTime}-${index}`}>
					{lastUnseenMessage === message && (
						<HStack w="100%">
							<Box as="span" w="100%" h="1px" bg="blue.500" />
							<Text size="boldSm" color="blue.700" whiteSpace="nowrap">
								Nouveaux messages
							</Text>
							<Box as="span" w="100%" h="1px" bg="blue.500" />
						</HStack>
					)}
					<ChatMessageCard message={message} />
				</VStack>
			))}
		</VStack>
	</VStack>
);

export default ChatMessageGroup;
