import { type Dispatch, type SetStateAction } from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import ChatMessages from 'components/dashboardPages/chat/ChatMessages';

import { type ChatType } from 'types/dashboard/chat/ChatType';

const ChatMessagesHandler = ({
	chat,
	setSelectedChatId,
}: {
	chat: ChatType | undefined;
	setSelectedChatId: Dispatch<SetStateAction<string>>;
}): JSX.Element => (
	<>
		{chat ? (
			<ChatMessages chat={chat} setSelectedChatId={setSelectedChatId} />
		) : (
			<VStack
				w="100%"
				h="100%"
				p="16px"
				spacing="16px"
				bg="blue.100"
				justify="center"
				borderRadius="16px"
				border="2px solid"
				borderColor="blue.200"
			>
				<Text size="boldLg">Sélectionner une conversation pour la lire</Text>
				<Image src="/assets/Edgars/edgar-confused.svg" alt="edgar-confused" width={200} height={227} />
			</VStack>
		)}
	</>
);

export default ChatMessagesHandler;
