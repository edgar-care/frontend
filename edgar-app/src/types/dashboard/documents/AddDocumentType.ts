import { DocumentCategoryType } from 'types/dashboard/documents/DocumentCategoryType';
import { DocumentTypeType } from 'types/dashboard/documents/DocumentTypeType';

export type AddDocumentType = {
	documentType: DocumentTypeType;
	category: DocumentCategoryType;
	document: ArrayBuffer;
	isFavorite: boolean;
};
