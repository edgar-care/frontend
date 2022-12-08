import { Flex, Text } from '@chakra-ui/react';
import colors from 'theme/foundations/colors';

import { ChatMessageType } from 'types/simulationPage/ChatMessageType';

const ChatMessageCard = ({ message }: { message: ChatMessageType }): JSX.Element => (
	<Flex w="100%" justifyContent={message.isUserSender ? 'flex-end' : 'flex-start'}>
		<Text size="lg" p="8px 16px" bg="white" borderRadius="12px" border={`1px solid ${colors.blue[200]}`}>
			{message.message}
		</Text>
	</Flex>
);

export default ChatMessageCard;
