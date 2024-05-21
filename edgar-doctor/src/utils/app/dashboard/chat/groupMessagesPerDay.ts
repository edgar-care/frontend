import { type ChatMessageType } from 'types/app/dashboard/chat/ChatType';

const groupMessagesPerDay = (chat: ChatMessageType[]) => {
	const messagesPerDay: { [key: string]: ChatMessageType[] } = {};

	chat.sort((a, b) => a.sentTime - b.sentTime).forEach((message) => {
		const date = new Date(message.sentTime);
		const day = date.toDateString();

		if (!messagesPerDay[day]) messagesPerDay[day] = [];
		messagesPerDay[day].push(message);
	});

	return messagesPerDay;
};

export default groupMessagesPerDay;
