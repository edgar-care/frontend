import { ToastStatusType } from './ToastStatusType';

export type MessageResponse = {
	title: string;
	status: ToastStatusType;
};

export type MessageResponseWithData = MessageResponse & {
	data: unknown;
};
