'use client';

import { useState } from 'react';
import { VStack, Button, HStack, Input, InputGroup, InputRightElement, useDisclosure } from '@chakra-ui/react';

import DocumentCard from 'components/dashboardPages/documents/DocumentCard';
import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AddDocumentModal from 'components/dashboardPages/documents/modal/AddDocumentModal';

// import { useGetDocumentsQuery } from 'services/request/documents';

import { DocumentType } from 'types/dashboard/documents/DocumentType';

import SearchIcon from 'assets/icons/SearchIcon';

// import DocumentFirstFilter from 'components/dashboardPages/documents/DocumentFirstFilter';

const DocumentsPageContent = (): JSX.Element => {
	// const { data: documentsData } = useGetDocumentsQuery();
	const [documentsData] = useState<DocumentType[]>([
		{
			_id: '1',
			url: 'https://google.fr',
			name: 'Document 1',
			isFavorite: true,
			_ownerId: 'user1',
			createdDate: Date.now(),
			updatedDate: Date.now(),
			documentType: 'PRESCRIPTION',
			category: 'GENERAL',
		},
		{
			_id: '2',
			url: 'https://google.fr',
			name: 'Document 2',
			isFavorite: false,
			_ownerId: 'user1',
			createdDate: Date.now(),
			updatedDate: Date.now(),
			documentType: 'XRAY',
			category: 'GENERAL',
		},
	]);
	const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();
	const [searchTerm, setSearchTerm] = useState('');
	void searchTerm;
	// const [sortOrder, setSortOrder] = useState('newest');

	// const handleFilterChange = (value: string) => {
	// 	setSortOrder(value);
	// 	const sortedDocuments = [...documentsData].sort((a, b) => {
	// 	  switch (value) {
	// 		case 'asc':
	// 		  return a.name.localeCompare(b.name);
	// 		case 'desc':
	// 		  return b.name.localeCompare(a.name);
	// 		case 'newest':
	// 		  return new Date(b.date).getTime() - new Date(a.date).getTime();
	// 		case 'oldest':
	// 		  return new Date(a.date).getTime() - new Date(b.date).getTime();
	// 		default:
	// 		  return 0;
	// 	  }
	// 	});
	// 	setDocumentsData(sortedDocuments);
	//   };

	return (
		<VStack w="100%" spacing="16px">
			<DashboardPageBanner
				title="Mes documents"
				subTitle="Retrouvez toutes vos documents personnels et médicaux."
			/>
			<VStack w="100%" spacing="24px">
				<HStack w="100%" spacing="16px">
					<Button size="customMd" variant="primary" whiteSpace="nowrap" onClick={onOpenAddModal}>
						Ajouter un document
					</Button>
					<InputGroup w="100%">
						<Input
							placeholder="Rechercher par nom du document ou nom du médecin"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<InputRightElement>
							<SearchIcon />
							{/* Transformer en icon as SearchIcon */}
						</InputRightElement>
					</InputGroup>
				</HStack>
				<HStack w="100%">
					{/* <DocumentFirstFilter onFilterChange={handleFilterChange} sortOrder={sortOrder} /> */}
				</HStack>
			</VStack>
			<VStack spacing="8px" w="100%" align="start">
				{documentsData
					// .filter(
					// 	(document) =>
					// 		document.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					// 		document.author.toLowerCase().includes(searchTerm.toLowerCase()),
					// )
					.map((document) => (
						<DocumentCard key={document._id} document={document} />
					))}
			</VStack>
			<AddDocumentModal isOpen={isOpenAddModal} onClose={onCloseAddModal} />
		</VStack>
	);
};

export default DocumentsPageContent;
