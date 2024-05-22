import { type ChatType } from 'types/app/dashboard/chat/ChatType';

const getNumberOfUnreadMessage = (chat: ChatType, userId: string): number => {
	const userLastSeenTime = chat.participants.find((participant) => participant.participantId === userId)?.lastSeen;
	if (!userLastSeenTime) return 0;

	let unreadMessageCount = 0;
	chat.messages.forEach((message) => {
		if (message.sentTime > userLastSeenTime) unreadMessageCount += 1;
	});
	return unreadMessageCount;
};

export default getNumberOfUnreadMessage;
