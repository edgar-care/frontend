const handleDocumentExtension = (documentName: string, extension: string): string => {
	const hasExtension = /\.[0-9a-z]+$/i.test(documentName);
	return hasExtension ? documentName.split('.')[0] + extension : documentName + extension;
};

export default handleDocumentExtension;
