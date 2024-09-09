const getDocumentExtension = (documentName: string): string => {
	const extension = documentName.split('.').pop();
	if (extension) return `.${extension}`;
	return '';
};

export default getDocumentExtension;
