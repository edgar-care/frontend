import { DocumentCategoryType } from 'types/dashboard/documents/DocumentCategoryType';
import { DocumentTypeType } from 'types/dashboard/documents/DocumentTypeType';

export type DocumentType = {
	id: string;
	url: string;
	name: string;
	isFavorite: boolean;
	ownerId: string;
	createdDate: number;
	updatedDate: number;
	documentType: DocumentTypeType;
	category: DocumentCategoryType;
};
