import { Skeleton, Text } from '@chakra-ui/react';

import ChatMessages from 'components/app/dashboardPages/chat/ChatMessages';

import { useChatContext } from 'contexts/chat';

const PatientsSubViewChat = ({ patientId }: { patientId: string | undefined }): JSX.Element => {
	const { chats } = useChatContext();

	const availableChat = chats.filter((chat) =>
		chat.participants.some((participant) => participant.participantId === patientId),
	)[0];

	if (!availableChat) return <Text>Le patient n'a pas commencer de conversation avec vous.</Text>;

	return (
		<Skeleton isLoaded={patientId !== undefined} w="100%" h="100%" borderRadius="8px">
			{chats && <ChatMessages chat={availableChat} />}
		</Skeleton>
	);
};

export default PatientsSubViewChat;
