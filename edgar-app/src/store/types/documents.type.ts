import { DocumentCategoryType } from 'types/dashboard/documents/DocumentCategoryType';
import { DocumentTypeType } from 'types/dashboard/documents/DocumentTypeType';

export interface DocumentsStoreType {
	id: string;
	owner_id: string;
	name: string;
	createdDate: number;
	updatedDate: number;
	document_type: DocumentTypeType;
	category: DocumentCategoryType;
	is_favorite: boolean;
	download_url: string;
}

export interface UpdateDocumentDTO {
	documentName: string;
	id: string;
}

export interface DeleteDocumentDTO {
	id: string;
}
