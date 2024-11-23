import { type Dispatch, type SetStateAction } from 'react';

import { WS_URL } from 'config/constants';

import type { ReceiveMobileConnectionMessage } from 'types/login-2fa/Login2faMobileClassType';

class Login2faMobile {
	private readonly socket: WebSocket | undefined;

	private uuid: string | undefined;

	private readonly setResponse: Dispatch<SetStateAction<boolean | undefined>> | undefined;

	private readonly setCode: Dispatch<SetStateAction<string>> | undefined;

	constructor(setResponse: Dispatch<SetStateAction<boolean | undefined>>, setCode: Dispatch<SetStateAction<string>>) {
		try {
			this.setResponse = setResponse;
			this.setCode = setCode;
			const socket = new WebSocket(WS_URL);

			socket.addEventListener('message', (event) => {
				this.handleMessage(event.data);
			});

			this.socket = socket;
		} catch (error) {
			console.error(error);
		}
	}

	private handleMessage = (data: string) => {
		const message = JSON.parse(data);

		if (message.uuid) this.uuid = message.uuid;
		if (message.action === 'response_mobile_connection')
			this.handleReceiveMobileConnection(message as ReceiveMobileConnectionMessage);
	};

	private handleReceiveMobileConnection = (data: ReceiveMobileConnectionMessage) => {
		if (this.setResponse && this.setCode) {
			this.setResponse(data.response);
			this.setCode(data.code);
		}
	};

	public makeReady = (os: string, browser: string, location: string) => {
		if (this.socket && this.socket.readyState === WebSocket.OPEN)
			this.socket.send(JSON.stringify({ action: 'readyLogin', os, browser, location }));
	};

	public getSocketState = () => this.socket?.readyState;

	public closeSocket = () => {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) this.socket.close();
	};

	public askMobileConnection = (email: string, password: string) => {
		try {
			if (!this.socket) return { status: 'error', data: 'Socket is not connected' };

			this.socket.send(
				JSON.stringify({ action: 'askMobileConnection', uuid: this.uuid, type: 'p', email, password }),
			);

			return { success: true, data: 'Message sent' };
		} catch (error) {
			console.error(error);
			return { success: false, data: error };
		}
	};
}

export default Login2faMobile;
