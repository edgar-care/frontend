'use client';

import { Button, HStack, useDisclosure, VStack } from '@chakra-ui/react';

import DocumentCard from 'components/dashboardPages/documents/DocumentCard';
import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AddDocumentHandler from 'components/dashboardPages/documents/modal/AddDocumentHandler';

import { useGetDocumentsQuery } from 'services/request/documents';

const DocumentsPageContent = (): JSX.Element => {
	const { data: documentsData } = useGetDocumentsQuery();
	const { isOpen: isOpenAddModal, onOpen: onOpenAddModal, onClose: onCloseAddModal } = useDisclosure();
	// const [searchTerm, setSearchTerm] = useState('');

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
						{/* <InputGroup w="100%"> */}
						{/*	<Input */}
						{/*		placeholder="Rechercher par nom du document ou nom du médecin" */}
						{/*		onChange={(e) => setSearchTerm(e.target.value)} */}
						{/*		id="edgar-dashboardDocumentsPage-searchBar-input" */}
						{/*	/> */}
						{/*	<InputRightElement> */}
						{/*		<Icon as={SearchIcon} w="16px" h="16px" /> */}
						{/*	</InputRightElement> */}
						{/* </InputGroup> */}
					</HStack>
				</VStack>
				<VStack spacing="8px" w="100%" align="start">
					{documentsData?.map((document) => <DocumentCard key={document.id} document={document} />)}
				</VStack>
				<AddDocumentHandler isOpen={isOpenAddModal} onClose={onCloseAddModal} />
			</VStack>
		</VStack>
	);
};

export default DocumentsPageContent;
