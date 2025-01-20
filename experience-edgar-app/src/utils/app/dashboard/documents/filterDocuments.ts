import { type DocumentType } from 'types/dashboard/documents/DocumentType';

const filterDocuments = (
	documents: DocumentType[],
	selectedFilters: string[],
	patientId: string,
	searchText: string,
): DocumentType[] => {
	const filters: { [key: string]: (document: DocumentType) => boolean } = {
		FAVORITE: (document) => document.isFavorite,
		OWN: (document) => document.ownerId === patientId,
		DOCTOR: (document) => document.ownerId !== patientId,
		PRESCRIPTION: (document) => document.documentType === 'PRESCRIPTION',
		XRAY: (document) => document.documentType === 'XRAY',
		CERTIFICATE: (document) => document.documentType === 'CERTIFICATE',
		OTHER: (document) => document.documentType === 'OTHER',
	};

	let filteredDocuments = [...documents];

	if (selectedFilters.includes('FAVORITE')) {
		filteredDocuments = filteredDocuments.filter(filters.FAVORITE);
	}
	if (selectedFilters.includes('OWN')) {
		filteredDocuments = filteredDocuments.filter(filters.OWN);
	}
	if (selectedFilters.includes('DOCTOR')) {
		filteredDocuments = filteredDocuments.filter(filters.DOCTOR);
	}

	const remainingFilters = selectedFilters.filter((filter) => !['FAVORITE', 'OWN', 'DOCTOR'].includes(filter));

	if (remainingFilters.length > 0) {
		filteredDocuments = filteredDocuments.filter((document) =>
			remainingFilters.some((filter) => filters[filter](document)),
		);
	}

	filteredDocuments = filteredDocuments.filter(
		(document) =>
			document.name.toLowerCase().includes(searchText.toLowerCase()) ||
			document.ownerId.toLowerCase().includes(searchText.toLowerCase()),
	);

	return filteredDocuments;
};

export default filterDocuments;
