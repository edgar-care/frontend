'use client';

import { useState } from 'react';
import { VStack, Button, HStack, Input, InputGroup, InputRightElement, useDisclosure, Icon } from '@chakra-ui/react';

import DocumentCard from 'components/dashboardPages/documents/DocumentCard';
import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import DocumentFilter from 'components/dashboardPages/documents/DocumentFilter';
import AddDocumentHandler from 'components/dashboardPages/documents/modal/AddDocumentHandler';

import { useGetDocumentsQuery } from 'services/request/documents';

import { useAuthContext } from 'contexts/auth';

import filterDocuments from 'utils/app/dashboard/documents/filterDocuments';
import sortDocuments from 'utils/app/dashboard/documents/sortDocuments';

import SearchIcon from 'assets/icons/SearchIcon';

const DocumentsPageContent = (): JSX.Element => {
	const { data: fetchedDocuments } = useGetDocumentsQuery();
	const [searchText, setSearchText] = useState<string>('');
	const [sortOption, setSortOption] = useState<string>('asc');
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

	const { auth } = useAuthContext();
	const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mes documents"
				subTitle="Retrouvez tous vos documents personnels et médicaux."
			/>
			<VStack w="100%" spacing="16px">
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
								maxLength={100}
								onChange={(e) => setSearchText(e.target.value)}
							/>
							<InputRightElement>
								<Icon as={SearchIcon} w="16px" h="16px" />
							</InputRightElement>
						</InputGroup>
					</HStack>
					<DocumentFilter onSort={setSortOption} onFilterChange={setSelectedFilters} />
				</VStack>
				<VStack spacing="8px" w="100%" align="start">
					{fetchedDocuments &&
						sortDocuments(
							filterDocuments(fetchedDocuments, selectedFilters, auth.getId(), searchText),
							sortOption,
						).map((document) => <DocumentCard key={document.id} document={document} />)}
				</VStack>
				<AddDocumentHandler isOpen={isOpenAddModal} onClose={onCloseAddModal} />
			</VStack>
		</VStack>
	);
};

export default DocumentsPageContent;
