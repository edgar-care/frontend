import { type Dispatch, type SetStateAction } from 'react';

import { WS_URL } from 'config/constants';

import { type ChatType } from 'types/dashboard/chat/ChatType';
import type {
	ChatResponse,
	MessageResponse,
	ReadChatResponse,
	ReceiveChatMessage,
	WebSocketMessage,
} from 'types/dashboard/chat/ChatClassType';

class Chat {
	private readonly socket: WebSocket | undefined;

	private readonly setChats: Dispatch<SetStateAction<ChatType[]>> | undefined;

	constructor(setChats: Dispatch<SetStateAction<ChatType[]>>) {
		try {
			this.setChats = setChats;
			const socket = new WebSocket(WS_URL);

			socket.addEventListener('message', (event) => {
				this.handleMessage(event.data);
			});

			if (socket.readyState === WebSocket.OPEN)
				socket.send(JSON.stringify({ auth: localStorage.getItem('token'), method: 'available' }));

			this.socket = socket;
		} catch (error) {
			console.error(error);
		}
	}

	private handleMessage = (data: string) => {
		const message: WebSocketMessage = JSON.parse(data);

		if (message.method === 'createChatResponse') this.handleCreateChatResponse(message.data as ChatResponse);
		if (message.method === 'readChatResponse') this.handleReadChatResponse(message.data as ReadChatResponse);
		if (message.method === 'sendMessageResponse') this.handleSendMessageResponse(message.data as MessageResponse);
		if (message.method === 'getMessagesResponse') this.handleGetMessagesResponse(message.data as ChatResponse[]);
		if (message.method === 'receiveMessage') this.handleReceiveMessage(message.data as ReceiveChatMessage);
	};

	private handleCreateChatResponse = (data: ChatResponse) => {
		if (this.setChats) {
			this.setChats((prev) => [
				...prev,
				{
					id: data.id,
					participants: data.participants.map((participant) => ({
						participantId: participant.participant_id,
						lastSeen: participant.last_seen,
					})),
					messages: data.messages.map((message) => ({
						ownerId: message.owner_id,
						message: message.message,
						sentTime: message.sent_time,
					})),
				},
			]);
		}
	};

	private handleReadChatResponse = (data: ReadChatResponse) => {
		if (this.setChats) {
			this.setChats((prev) =>
				prev.map((chat) =>
					chat.id === data.id
						? {
								id: chat.id,
								participants: chat.participants.map((participant) => ({
									participantId: participant.participantId,
									lastSeen: Date.now(),
								})),
								messages: chat.messages,
							}
						: chat,
				),
			);
		}
	};

	private handleSendMessageResponse = (data: MessageResponse) => {
		if (this.setChats) {
			this.setChats((prev) =>
				prev.map((chat) =>
					chat.id === data.id
						? {
								id: chat.id,
								participants: chat.participants.map((participant) => ({
									participantId: participant.participantId,
									lastSeen: participant.lastSeen,
								})),
								messages: chat.messages.concat({
									ownerId: data.message.owner_id,
									message: data.message.message,
									sentTime: data.message.sent_time,
								}),
							}
						: chat,
				),
			);
		}
	};

	private handleGetMessagesResponse = (data: ChatResponse[]) => {
		if (this.setChats) {
			this.setChats(
				data.map((chat) => ({
					id: chat.id,
					participants: chat.participants.map((participant) => ({
						participantId: participant.participant_id,
						lastSeen: participant.last_seen,
					})),
					messages: chat.messages.map((message) => ({
						ownerId: message.owner_id,
						message: message.message,
						sentTime: message.sent_time,
					})),
				})),
			);
		}
	};

	private handleReceiveMessage = (data: ReceiveChatMessage) => {
		if (this.setChats) {
			this.setChats((prev) =>
				prev.map((chat) =>
					chat.id === data.chat_id
						? {
								id: chat.id,
								participants: chat.participants,
								messages: chat.messages.concat({
									ownerId: data.owner_id,
									message: data.message,
									sentTime: data.timestamp,
								}),
							}
						: chat,
				),
			);
		}
	};

	public createChat = async (message: string, recipientsIds: string[]) => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(
				JSON.stringify({
					auth: localStorage.getItem('token'),
					method: 'createChat',
					content: { message, recipients_ids: recipientsIds },
				}),
			);
			return { status: 'success', data: 'Chat created' };
		} catch (error) {
			console.error(error);
			return { status: error, data: error };
		}
	};

	public readChat = async (chatId: string) => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(
				JSON.stringify({
					auth: localStorage.getItem('token'),
					method: 'readChat',
					content: { chat_id: chatId },
				}),
			);
			return { status: 'success', data: 'Chat read' };
		} catch (error) {
			console.error(error);
			return { status: error, data: error };
		}
	};

	public sendMessage = async (message: string, chatId: string) => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(
				JSON.stringify({
					auth: localStorage.getItem('token'),
					method: 'sendMessage',
					content: { message, chat_id: chatId },
				}),
			);
			return { status: 'success', data: 'Message sent' };
		} catch (error) {
			console.error(error);
			return { status: error, data: error };
		}
	};

	public getMessages = async () => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(JSON.stringify({ auth: localStorage.getItem('token'), method: 'getMessages' }));
			return { status: 'success', data: 'Message sent' };
		} catch (error) {
			console.error(error);
			return { status: error, data: error };
		}
	};
}

export default Chat;
