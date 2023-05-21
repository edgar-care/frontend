import { Flex, Text } from '@chakra-ui/react';

import { ChatMessageType } from 'types/simulationPage/ChatMessageType';

import colors from 'theme/foundations/colors';

const ChatMessageCard = ({ message }: { message: ChatMessageType }): JSX.Element => (
	<Flex
		w="100%"
		justifyContent={message.isUserSender ? 'flex-end' : 'flex-start'}
		pr={!message.isUserSender ? { base: '32px', md: '64px' } : '0px'}
		pl={message.isUserSender ? { base: '32px', md: '64px' } : '0px'}
	>
		<Text size="lg" p="8px 16px" bg="white" borderRadius="12px" border={`1px solid ${colors.blue[200]}`}>
			{message.message}
		</Text>
	</Flex>
);

export default ChatMessageCard;
