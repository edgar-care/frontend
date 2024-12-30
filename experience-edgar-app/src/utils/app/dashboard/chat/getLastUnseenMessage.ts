import { type ChatMessageType } from 'types/dashboard/chat/ChatType';

const getLastUnseenMessage = (messages: ChatMessageType[], userLastSeen: number): ChatMessageType | undefined =>
	messages.find((message) => message.sentTime > userLastSeen);

export default getLastUnseenMessage;
