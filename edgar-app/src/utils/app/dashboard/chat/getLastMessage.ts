import { type ChatMessageType } from 'types/dashboard/chat/ChatType';

const getLastMessage = (messages: ChatMessageType[]): ChatMessageType =>
	messages.sort((a, b) => b.sentTime - a.sentTime)[0];

export default getLastMessage;
