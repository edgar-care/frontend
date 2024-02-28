'use client';

import { useState } from 'react';
import { VStack, Button, HStack, Input, InputGroup, InputRightElement, useDisclosure, Icon } from '@chakra-ui/react';

import DocumentCard from 'components/dashboardPages/documents/DocumentCard';
import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AddDocumentModal from 'components/dashboardPages/documents/modal/AddDocumentModal';
import DocumentFilter from 'components/dashboardPages/documents/DocumentFilter';

// import { useGetDocumentsQuery } from 'services/request/documents';

import { DocumentType } from 'types/dashboard/documents/DocumentType';

import SearchIcon from 'assets/icons/SearchIcon';

const DocumentsPageContent = (): JSX.Element => {
	// const { data: documentsData } = useGetDocumentsQuery();
	const [searchText, setSearchText] = useState<string>('');
	const specificDate = new Date('November 20, 2023');
	const [documentsData, setDocumentsData] = useState<DocumentType[]>([
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
			name: 'Etest',
			isFavorite: false,
			_ownerId: 'user1',
			createdDate: Date.now(),
			updatedDate: Date.now(),
			documentType: 'XRAY',
			category: 'GENERAL',
		},
		{
			_id: '3',
			url: 'https://google.fr',
			name: 'Ordonnance',
			isFavorite: true,
			_ownerId: 'toi',
			createdDate: specificDate.getTime(),
			updatedDate: Date.now(),
			documentType: 'PRESCRIPTION',
			category: 'GENERAL',
		},
	]);
	const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();

	const filteredDocuments = documentsData.filter(
		(document) =>
			document.name.toLowerCase().includes(searchText.toLowerCase()) ||
			document._ownerId.toLowerCase().includes(searchText.toLowerCase()),
	);

	const handleSort = (option: string) => {
		const sortedDocuments = [...documentsData];

		if (option === 'asc') {
			sortedDocuments.sort((a, b) => a.name.localeCompare(b.name));
		} else if (option === 'desc') {
			sortedDocuments.sort((a, b) => b.name.localeCompare(a.name));
		} else if (option === 'newest') {
			sortedDocuments.sort((a, b) => b.createdDate - a.createdDate);
		} else if (option === 'oldest') {
			sortedDocuments.sort((a, b) => a.createdDate - b.createdDate);
		}

		setDocumentsData(sortedDocuments);
	};

	const handleFilterChange = (filterType: string) => {
		console.log(`Filter changed: ${filterType}`);
	};

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
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
						/>
						<InputRightElement>
							<Icon as={SearchIcon} w="16px" h="16px" />
						</InputRightElement>
					</InputGroup>
				</HStack>
				<DocumentFilter onSort={handleSort} onFilterChange={handleFilterChange} />
			</VStack>
			<VStack spacing="8px" w="100%" align="start">
				{filteredDocuments.map((document) => (
					<DocumentCard key={document._id} document={document} />
				))}
			</VStack>
			<AddDocumentModal isOpen={isOpenAddModal} onClose={onCloseAddModal} />
		</VStack>
	);
};

export default DocumentsPageContent;
