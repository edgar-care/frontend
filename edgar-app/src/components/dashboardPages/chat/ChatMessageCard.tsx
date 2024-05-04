import { HStack, Text, VStack } from '@chakra-ui/react';

import { useAuthContext } from 'contexts/auth';

import { type ChatMessageType } from 'types/dashboard/chat/ChatType';

const ChatMessageCard = ({ message }: { message: ChatMessageType }): JSX.Element => {
	const auth = useAuthContext();

	return (
		<HStack
			w="100%"
			justify={message.ownerId === auth.getId() ? 'end' : 'start'}
			align="end"
			p={message.ownerId === auth.getId() ? '0px 0px 0px 128px' : '0px 128px 0px 0px'}
		>
			{message.ownerId === auth.getId() && (
				<Text size="sm">
					{new Date(message.sentTime).toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric' })}
				</Text>
			)}
			<VStack
				align="start"
				bg={message.ownerId === auth.getId() ? 'blue.200' : 'green.100'}
				borderRadius="16px"
				p="8px 16px"
			>
				<Text size="boldMd">{message.message}</Text>
			</VStack>
			{message.ownerId !== auth.getId() && (
				<Text size="sm">
					{new Date(message.sentTime).toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric' })}
				</Text>
			)}
		</HStack>
	);
};

export default ChatMessageCard;
