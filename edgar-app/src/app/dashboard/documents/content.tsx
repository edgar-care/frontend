'use client';

import { Button, HStack, Icon, Input, InputGroup, InputRightElement, useDisclosure, VStack } from '@chakra-ui/react';

import DocumentCard from 'components/dashboardPages/documents/DocumentCard';
import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AddDocumentHandler from 'components/dashboardPages/documents/modal/AddDocumentHandler';

import { useGetDocumentsQuery } from 'services/request/documents';
import DocumentFilter from 'components/dashboardPages/documents/DocumentFilter';
import SearchIcon from 'assets/icons/SearchIcon';
import { useState } from 'react';
import { DocumentType } from 'types/dashboard/documents/DocumentType';

const DocumentsPageContent = (): JSX.Element => {
	const { data: documents } = useGetDocumentsQuery();
	const [searchText, setSearchText] = useState<string>('');
	const [documentsData, setDocumentsData] = useState<DocumentType[]>([]);
	const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();

	const filteredDocuments = documents?.filter(
		(document) =>
			document.name.toLowerCase().includes(searchText.toLowerCase()) ||
			document.ownerId.toLowerCase().includes(searchText.toLowerCase()),
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
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mes documents"
				subTitle="Retrouvez tous vos documents personnels et médicaux."
			/>
			<VStack w="100%" spacing="24px">
				<HStack w="100%" spacing="16px">
					<Button
						size="customMd"
						variant="primary"
						whiteSpace="nowrap"
						onClick={onOpenAddModal}
						w={{ base: '100%', smd: 'auto' }}
						id="edgar-dashboardDocumentsPage-addDocument-button"
					>
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
				<VStack spacing="8px" w="100%" align="start">
					{filteredDocuments?.map((document) => <DocumentCard key={document.id} document={document} />)}
				</VStack>
				<AddDocumentHandler isOpen={isOpenAddModal} onClose={onCloseAddModal} />
			</VStack>
		</VStack>
	);
};

export default DocumentsPageContent;
