import { Text } from '@chakra-ui/react';

import { type SimulationChatMessageType } from 'types/simulation/SimulationChatMessageType';

const SimulationChatMessageCard = ({ message }: { message: SimulationChatMessageType }): JSX.Element => (
	<Text size={message.isUserSender ? 'xl' : 'bold2xl'} w="100%" textAlign={message.isUserSender ? 'right' : 'left'}>
		{message.message}
	</Text>
);

export default SimulationChatMessageCard;
