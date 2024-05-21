import { type DocumentTypeType } from 'types/app/dashboard/patients/documents/DocumentTypeType';
import { type DocumentCategoryType } from 'types/app/dashboard/patients/documents/DocumentCategoryType';

export type PatientDocumentType = {
	id: string;
	ownerId: string;
	name: string;
	documentType: DocumentTypeType;
	category: DocumentCategoryType;
	isFavorite: boolean;
	downloadUrl: string;
};
