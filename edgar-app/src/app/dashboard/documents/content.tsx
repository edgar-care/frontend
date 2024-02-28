'use client';

import React, { useEffect, useState } from 'react';
import { VStack, Button, HStack, Input, InputGroup, InputRightElement, useDisclosure, Icon } from '@chakra-ui/react';
import DocumentCard from 'components/dashboardPages/documents/DocumentCard';
import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import DocumentFilter from 'components/dashboardPages/documents/DocumentFilter';
import AddDocumentHandler from 'components/dashboardPages/documents/modal/AddDocumentHandler';
import { useGetDocumentsQuery } from 'services/request/documents';
import { DocumentType } from 'types/dashboard/documents/DocumentType';
import { useAuthContext } from 'contexts/auth';
import SearchIcon from 'assets/icons/SearchIcon';

const DocumentsPageContent = (): JSX.Element => {
	const auth = useAuthContext();
	const { data: fetchedDocuments } = useGetDocumentsQuery();
	const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();
	const [searchText, setSearchText] = useState<string>('');
	const [filteredDocuments, setFilteredDocuments] = useState<DocumentType[]>([]);
	const [sortOption, setSortOption] = useState<string>('asc');
	const [filterTypes, setFilterTypes] = useState<string[]>([]);

	const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	useEffect(() => {
		if (fetchedDocuments) {
			let updatedFilteredDocuments = [...fetchedDocuments];
			const updatedFilterTypes = [...filterTypes];

			if (updatedFilterTypes.includes('FAVORITE')) {
				updatedFilteredDocuments = updatedFilteredDocuments.filter((document) => document.isFavorite);
				updatedFilterTypes.splice(updatedFilterTypes.indexOf('FAVORITE'), 1);
			}
			if (updatedFilterTypes.includes('OWN')) {
				const id = auth.getId();
				updatedFilteredDocuments = updatedFilteredDocuments.filter((document) => document.ownerId === id);
				updatedFilterTypes.splice(updatedFilterTypes.indexOf('OWN'), 1);
			}
			if (updatedFilterTypes.includes('DOCTOR')) {
				updatedFilterTypes.splice(updatedFilterTypes.indexOf('DOCTOR'), 1);
			}
			if (updatedFilterTypes.length > 0) {
				updatedFilteredDocuments = updatedFilteredDocuments.filter((document) =>
					updatedFilterTypes.includes(document.documentType),
				);
			}

			if (searchText.trim() !== '') {
				updatedFilteredDocuments = updatedFilteredDocuments.filter(
					(document) =>
						document.name.toLowerCase().includes(searchText.toLowerCase()) ||
						document.ownerId.toLowerCase().includes(searchText.toLowerCase()),
				);
			}

			if (updatedFilteredDocuments.length > 0) {
				updatedFilteredDocuments.sort((a, b) => {
					if (sortOption === 'desc') {
						return b.name.localeCompare(a.name);
					}
					return a.name.localeCompare(b.name);
				});
			}

			setFilteredDocuments(updatedFilteredDocuments);
		}
	}, [fetchedDocuments, searchText, sortOption, filterTypes, auth]);

	const handleSort = (option: string) => {
		setSortOption(option);
	};

	const handleFilterChange = (selectedFilters: string[]) => {
		setFilterTypes(selectedFilters);
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
							onChange={handleSearchTextChange}
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
