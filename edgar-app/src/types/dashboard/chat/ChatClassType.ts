export type WebSocketMessage = {
	method:
		| 'createChatResponse'
		| 'readChatResponse'
		| 'sendMessageResponse'
		| 'getMessagesResponse'
		| 'receiveMessage';
	data: unknown;
};

export type ReceiveChatMessage = {
	owner_id: string;
	message: string;
	timestamp: number;
	chat_id: string;
};

export type ChatResponse = {
	id: string;
	participants: {
		participant_id: string;
		last_seen: number;
	}[];
	messages: {
		owner_id: string;
		message: string;
		sent_time: number;
	}[];
};

export type MessageResponse = {
	id: string;
	participants: {
		participant_id: string;
		last_seen: number;
	}[];
	message: {
		owner_id: string;
		message: string;
		sent_time: number;
	};
};

export type ReadChatResponse = {
	id: string;
	participants: {
		participant_id: string;
		last_seen: number;
	}[];
};
