import { DocumentCategoryType } from 'types/dashboard/documents/DocumentCategoryType';
import { DocumentTypeType } from 'types/dashboard/documents/DocumentTypeType';

export type DocumentType = {
	_id: string;
	url: string;
	name: string;
	isFavorite: boolean;
	_ownerId: string;
	createdDate: number;
	updatedDate: number;
	documentType: DocumentTypeType;
	category: DocumentCategoryType;
};
