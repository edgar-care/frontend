'use client';

import React, { useState } from 'react';
import { VStack, Button, HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import SearchIcon from 'assets/icons/SearchIcon';

import DocumentItem from 'components/dashboardPages/documents/DocumentItem';
// import DocumentFirstFilter from 'components/dashboardPages/documents/DocumentFirstFilter';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AddDocumentModal from 'components/dashboardPages/documents/modal/AddDocumentModal';
import RemoveDocumentModal from 'components/dashboardPages/documents/modal/RemoveDocumentModal';
import EditDocumentModal from 'components/dashboardPages/documents/modal/EditDocumentModal';

const DocumentsPageContent = (): JSX.Element => {
	const [documentsData, setDocumentsData] = useState<
		Array<{ type: string; name: string; date: string; author: string; medicine: string; isStarred: boolean }>
	>([]);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
	const [documentIndexToRemove, setDocumentIndexToRemove] = useState(-1);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [documentIndexToEdit, setDocumentIndexToEdit] = useState(-1);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortOrder, setSortOrder] = useState('newest');

	const handleStarClick = (index: number) => {
		const updatedDocuments = [...documentsData];
		updatedDocuments[index].isStarred = !updatedDocuments[index].isStarred;
		setDocumentsData(updatedDocuments);
	};

	const handleOpenModal = () => {
		setIsAddModalOpen(true);
	};

	const handleRemoveDocument = (indexToRemove: number) => {
		setDocumentIndexToRemove(indexToRemove);
		setIsRemoveModalOpen(true);
	};

	const handleConfirmRemove = () => {
		const updatedDocuments = documentsData.filter((_, index) => index !== documentIndexToRemove);
		setDocumentsData(updatedDocuments);
		setIsRemoveModalOpen(false);
	};

	const handleSaveEdit = (newName: string) => {
		const updatedDocuments = [...documentsData];
		updatedDocuments[documentIndexToEdit].name = newName;
		setDocumentsData(updatedDocuments);
		setIsEditModalOpen(false);
	};

	const handleEditDocument = (indexToEdit: number) => {
		setDocumentIndexToEdit(indexToEdit);
		setIsEditModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsAddModalOpen(false);
		setIsRemoveModalOpen(false);
	};

	const handleAddDocument = (type: string, name: string, author: string, medicine: string) => {
		const newDocument = {
			type,
			name,
			date: new Date().toISOString().split('T')[0],
			author,
			medicine,
			isStarred: false,
		};
		setDocumentsData([...documentsData, newDocument]);
	};

	const handleFilterChange = (value: string) => {
		setSortOrder(value);
		const sortedDocuments = [...documentsData].sort((a, b) => {
		  switch (value) {
			case 'asc':
			  return a.name.localeCompare(b.name);
			case 'desc':
			  return b.name.localeCompare(a.name);
			case 'newest':
			  return new Date(b.date).getTime() - new Date(a.date).getTime();
			case 'oldest':
			  return new Date(a.date).getTime() - new Date(b.date).getTime();
			default:
			  return 0;
		  }
		});
		setDocumentsData(sortedDocuments);
	  };

	return (
		<VStack w="100%" spacing="16px">
			<DashboardPageBanner
				title="Mes documents"
				subTitle="Retrouvez toutes vos documents personnels et médicaux."
			/>
			<VStack w="100%" spacing="24px">
				<HStack w="100%" spacing="16px">
					<Button size="customMd" variant="primary" whiteSpace="nowrap" onClick={handleOpenModal}>
						Ajouter un document
					</Button>
					<InputGroup w="100%">
						<Input
							placeholder="Rechercher par nom du document ou nom du médecin"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<InputRightElement>
							<SearchIcon />
						</InputRightElement>
					</InputGroup>
				</HStack>
				<HStack w="100%">
					{/* <DocumentFirstFilter onFilterChange={handleFilterChange} sortOrder={sortOrder} /> */}
				</HStack>
			</VStack>
			<VStack spacing="8px" w="100%" align="start">
				{documentsData
					.filter((document) => 
						document.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
						document.author.toLowerCase().includes(searchTerm.toLowerCase())
					)
					.map((document, index) => (
					<DocumentItem
						key={index}
						document={document}
						onStarClick={() => handleStarClick(index)}
						onRemoveClick={() => handleRemoveDocument(index)}
						onEditClick={() => handleEditDocument(index)}
					/>
				))}
			</VStack>
			<AddDocumentModal isOpen={isAddModalOpen} onClose={handleCloseModal} onAddDocument={handleAddDocument} />
			<RemoveDocumentModal isOpen={isRemoveModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmRemove} />
			<EditDocumentModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onSave={(newName) => handleSaveEdit(newName)} />
		</VStack>
	);
};

export default DocumentsPageContent;
