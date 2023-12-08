import { DocumentCategoryType } from 'types/dashboard/documents/DocumentCategoryType';
import { DocumentTypeType } from 'types/dashboard/documents/DocumentTypeType';

export interface DocumentsStoreType {
	_id: string;
	url: string;
	name: string;
	isFavorite: boolean;
	_ownerId: string;
	createdDate: number;
	updatedDate: number;
	documentType: DocumentTypeType;
	category: DocumentCategoryType;
}

export interface AddDocumentDTO {
	isFavorite: boolean;
	document: ArrayBuffer;
	documentType: DocumentTypeType;
	category: DocumentCategoryType;
}

export interface UpdateDocumentDTO {
	documentName: string;
	_id: string;
}

export interface DeleteDocumentDTO {
	_id: string;
}
