'use client';

import { useState } from 'react';
import { VStack, Button, HStack, Input, InputGroup, InputRightElement, useDisclosure, Icon } from '@chakra-ui/react';

import DocumentCard from 'components/dashboardPages/documents/DocumentCard';
import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AddDocumentModal from 'components/dashboardPages/documents/modal/AddDocumentModal';

// import { useGetDocumentsQuery } from 'services/request/documents';

import { DocumentType } from 'types/dashboard/documents/DocumentType';

import SearchIcon from 'assets/icons/SearchIcon';

const DocumentsPageContent = (): JSX.Element => {
	// const { data: documentsData } = useGetDocumentsQuery();
	const [documentsData] = useState<DocumentType[]>([
		// {
		// 	_id: '1',
		// 	url: 'https://google.fr',
		// 	name: 'Document 1',
		// 	isFavorite: true,
		// 	_ownerId: 'user1',
		// 	createdDate: Date.now(),
		// 	updatedDate: Date.now(),
		// 	documentType: 'PRESCRIPTION',
		// 	category: 'GENERAL',
		// },
		// {
		// 	_id: '2',
		// 	url: 'https://google.fr',
		// 	name: 'Document 2',
		// 	isFavorite: false,
		// 	_ownerId: 'user1',
		// 	createdDate: Date.now(),
		// 	updatedDate: Date.now(),
		// 	documentType: 'XRAY',
		// 	category: 'GENERAL',
		// },
	]);
	const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();
	const [searchTerm, setSearchTerm] = useState('');
	void searchTerm;

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mes documents"
				subTitle="Retrouvez toutes vos documents personnels et médicaux."
			/>
			<VStack w="100%" spacing="16px">
				<VStack w="100%" spacing="24px">
					<HStack w="100%" spacing="16px">
						<Button size="customMd" variant="primary" whiteSpace="nowrap" onClick={onOpenAddModal} id="edgar-dashboardDocumentsPage-addDocument-button">
							Ajouter un document
						</Button>
						<InputGroup w="100%">
							<Input
								placeholder="Rechercher par nom du document ou nom du médecin"
								onChange={(e) => setSearchTerm(e.target.value)}
								id="edgar-dashboardDocumentsPage-searchBar-input"
							/>
							<InputRightElement>
								<Icon as={SearchIcon} w="16px" h="16px" />
							</InputRightElement>
						</InputGroup>
					</HStack>
				</VStack>
				<VStack spacing="8px" w="100%" align="start">
					{documentsData.map((document) => (
						<DocumentCard key={document._id} document={document} />
					))}
				</VStack>
				<AddDocumentModal isOpen={isOpenAddModal} onClose={onCloseAddModal} />
			</VStack>
		</VStack>
	);
};

export default DocumentsPageContent;
