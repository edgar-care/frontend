import { type Dispatch, type SetStateAction } from 'react';

import { WS_URL } from 'config/constants';

import { type ChatType } from 'types/dashboard/chat/ChatType';
import type { ChatResponse, ChatResponses, ReceiveChatMessage } from 'types/dashboard/chat/ChatClassType';

class Chat {
	private socket: WebSocket | undefined;

	private readonly setChats: Dispatch<SetStateAction<ChatType[]>> | undefined;

	constructor(setChats: Dispatch<SetStateAction<ChatType[]>>) {
		try {
			this.setChats = setChats;
			this.initializeWebSocket();
		} catch (error) {
			console.error(error);
		}
	}

	private initializeWebSocket = () => {
		const socket = new WebSocket(WS_URL);

		socket.addEventListener('message', (event) => {
			this.handleMessage(event.data);
		});

		socket.addEventListener('close', () => {
			console.warn('WebSocket closed, attempting to reopen...');
			this.closeSocket();
			setTimeout(this.initializeWebSocket, 1000); // Reopen after 1 second
			setTimeout(this.makeReady, 5000);
		});

		socket.addEventListener('error', (error) => {
			console.error('WebSocket error:', error);
			this.closeSocket();
			setTimeout(this.initializeWebSocket, 1000); // Reopen after 1 second
			setTimeout(this.makeReady, 5000);
		});
		this.socket = socket;
	};

	private handleMessage = (data: string) => {
		const message = JSON.parse(data);

		if (message.action === 'get_message') this.handleGetMessagesResponse(message as ChatResponses);
		if (message.action === 'receive_message') this.handleReceiveMessage(message as ReceiveChatMessage);
		if (message.action === 'create_chat') this.handleCreateChatResponse(message as ChatResponse);
		if (message.action === 'read_message') this.handleReadChatResponse(message as ChatResponse);
	};

	private handleCreateChatResponse = (data: ChatResponse) => {
		if (this.setChats) {
			this.setChats((prev) => [
				...prev,
				{
					id: data.chat.id,
					participants: data.chat.participants.map((participant) => ({
						participantId: participant.participant_id,
						lastSeen: participant.last_seen * 1000,
					})),
					messages: data.chat.messages.map((message) => ({
						ownerId: message.owner_id,
						message: message.message,
						sentTime: message.sended_time * 1000,
					})),
				},
			]);
		}
	};

	private handleReadChatResponse = (data: ChatResponse) => {
		if (this.setChats) {
			this.setChats((prev) =>
				prev.map((chat) =>
					chat.id === data.chat.id
						? {
								id: chat.id,
								participants: data.chat.participants.map((participant) => ({
									participantId: participant.participant_id,
									lastSeen: participant.last_seen * 1000,
								})),
								messages: chat.messages,
							}
						: chat,
				),
			);
		}
	};

	private handleGetMessagesResponse = (data: ChatResponses) => {
		if (this.setChats) {
			this.setChats(
				data.chats?.map((chat) => ({
					id: chat.id,
					participants: chat.participants.map((participant) => ({
						participantId: participant.participant_id,
						lastSeen: participant.last_seen * 1000,
					})),
					messages: chat.messages.map((message) => ({
						ownerId: message.owner_id,
						message: message.message,
						sentTime: message.sended_time * 1000,
					})),
				})) || [],
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
								participants: chat.participants.map((participant) => ({
									participantId: participant.participantId,
									lastSeen: participant.lastSeen,
								})),
								messages: chat.messages.concat({
									ownerId: data.owner_id,
									message: data.message,
									sentTime: data.timestamp * 1000,
								}),
							}
						: chat,
				),
			);
		}
	};

	public makeReady = () => {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			this.socket.send(JSON.stringify({ action: 'ready', authToken: localStorage.getItem('token') }));
			this.getMessages();
		}
	};

	public getSocketState = () => this.socket?.readyState;

	public closeSocket = () => {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			this.socket.removeEventListener('close', this.initializeWebSocket); // Prevent reopening on manual close
			this.socket.close();
		}
	};

	public createChat = (message: string, recipientsIds: string[]) => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(
				JSON.stringify({
					authToken: localStorage.getItem('token'),
					action: 'create_chat',
					message,
					recipient_ids: recipientsIds,
				}),
			);
			return { status: 'success', data: 'Chat created' };
		} catch (error) {
			console.error(error);
			return { status: error, data: error };
		}
	};

	public readChat = (chatId: string) => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(
				JSON.stringify({
					authToken: localStorage.getItem('token'),
					action: 'read_message',
					chat_id: chatId,
				}),
			);
			return { status: 'success', data: 'Chat read' };
		} catch (error) {
			console.error(error);
			return { status: error, data: error };
		}
	};

	public sendMessage = (message: string, chatId: string) => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(
				JSON.stringify({
					authToken: localStorage.getItem('token'),
					action: 'send_message',
					message,
					chat_id: chatId,
				}),
			);
			return { status: 'success', data: 'Message sent' };
		} catch (error) {
			console.error(error);
			return { status: error, data: error };
		}
	};

	public getMessages = () => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(JSON.stringify({ authToken: localStorage.getItem('token'), action: 'get_messages' }));
			return { status: 'success', data: 'Message sent' };
		} catch (error) {
			console.error(error);
			return { status: error, data: error };
		}
	};
}

export default Chat;
