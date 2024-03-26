import { type DocumentType } from 'types/dashboard/documents/DocumentType';

const sortDocuments = (documents: DocumentType[], sortOption: string): DocumentType[] => {
	const sorters: { [key: string]: (a: DocumentType, b: DocumentType) => number } = {
		desc: (a, b) => b.name.localeCompare(a.name),
		asc: (a, b) => a.name.localeCompare(b.name),
	};
	const sortedDocuments = [...documents];

	sortedDocuments.sort(sorters[sortOption]);

	return sortedDocuments;
};

export default sortDocuments;
