export type ChatParticipantType = {
	participantId: string;
	lastSeen: number;
};

export type ChatMessageType = {
	ownerId: string;
	message: string;
	sentTime: number;
};

export type ChatType = {
	id: string;
	participants: ChatParticipantType[];
	messages: ChatMessageType[];
};
