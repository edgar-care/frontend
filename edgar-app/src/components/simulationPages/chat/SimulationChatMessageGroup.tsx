import { VStack } from '@chakra-ui/react';

import SimulationChatMessageCard from 'components/simulationPages/chat/SimulationChatMessageCard';

import { type SimulationChatMessageType } from 'types/simulation/SimulationChatMessageType';

const SimulationChatMessageGroup = ({
	messages,
	lastGroupMessage,
}: {
	messages: SimulationChatMessageType[];
	lastGroupMessage: boolean;
}): JSX.Element => (
	<VStack w="100%" spacing="16px" opacity={lastGroupMessage ? '100%' : '35%'}>
		{messages.map((message) => (
			<SimulationChatMessageCard message={message} key={message.createdAt.getTime()} />
		))}
	</VStack>
);

export default SimulationChatMessageGroup;
