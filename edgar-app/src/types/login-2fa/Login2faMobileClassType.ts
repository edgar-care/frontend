export type WebSocketMessageAction = 'response_mobile_connection';

export type ReceiveMobileConnectionMessage = {
	action: WebSocketMessageAction;
	code: string;
	response: boolean;
};
