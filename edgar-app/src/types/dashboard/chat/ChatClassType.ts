export type WebSocketMessageAction = 'create_chat' | 'read_chat' | 'get_message' | 'receive_message';

export type ReceiveChatMessage = {
	action: WebSocketMessageAction;
	owner_id: string;
	message: string;
	timestamp: number;
	chat_id: string;
};

export type ChatResponses = {
	action: WebSocketMessageAction;
	chats: WebsocketChatType[];
};

export type ChatResponse = {
	action: WebSocketMessageAction;
	chat: WebsocketChatType;
};

export type WebsocketChatType = {
	id: string;
	participants: {
		participant_id: string;
		last_seen: number;
	}[];
	messages: {
		owner_id: string;
		message: string;
		sended_time: number;
	}[];
};
