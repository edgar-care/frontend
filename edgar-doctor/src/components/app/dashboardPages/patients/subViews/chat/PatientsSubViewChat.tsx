import { Skeleton } from '@chakra-ui/react';

import ChatMessages from 'components/app/dashboardPages/chat/ChatMessages';

import { useChatContext } from 'contexts/chat';

const PatientsSubViewChat = ({ patientId }: { patientId: string | undefined }): JSX.Element => {
	const { chats } = useChatContext();

	return (
		<Skeleton isLoaded={patientId !== undefined} w="100%" h="100%" borderRadius="8px">
			<ChatMessages
				chat={
					chats.filter((chat) =>
						chat.participants.some((participant) => participant.participantId === patientId),
					)[0]
				}
			/>
		</Skeleton>
	);
};

export default PatientsSubViewChat;
