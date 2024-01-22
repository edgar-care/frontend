import { Box, Button, HStack, Icon, Stack, Text, useDisclosure, useBreakpointValue, VStack } from '@chakra-ui/react';

import DeleteDocumentHandler from 'components/dashboardPages/documents/modal/DeleteDocumentHandler';
import UpdateDocumentHandler from 'components/dashboardPages/documents/modal/UpdateDocumentHandler';

import { useAddDocumentToFavoriteMutation, useRemoveDocumentToFavoriteMutation } from 'services/request/documents';

import { DocumentType } from 'types/dashboard/documents/DocumentType';

import StarHoverIcon from 'assets/icons/Stars/StarHoverIcon';
import StarOutlineIcon from 'assets/icons/Stars/StarOutlineIcon';

const DocumentCard = ({ document }: { document: DocumentType }) => {
	const [triggerAddDocumentToFavorite] = useAddDocumentToFavoriteMutation();
	const [triggerRemoveDocumentFromFavorite] = useRemoveDocumentToFavoriteMutation();

	const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();
	const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();

	const isMobile = useBreakpointValue({ base: true, sm: false });

	const documentTypes: { [key: string]: string } = {
		PRESCRIPTION: 'green.500',
		CERTIFICATE: 'blue.700',
		XRAY: 'green.300',
		OTHER: 'blue.200',
	};

	return (
		<>
			<Stack
				direction={{ base: 'column', md: 'row' }}
				bg="white"
				border="2px solid"
				borderColor="blue.200"
				borderRadius="8px"
				p="12px"
				w="100%"
				justify="space-between"
				spacing="16px"
			>
				<HStack w="100%" spacing="8px">
					{document.isFavorite ? (
						<Icon
							as={StarHoverIcon}
							w="16px"
							h="16px"
							color="blue.700"
							cursor="pointer"
							onClick={() => {
								triggerRemoveDocumentFromFavorite(document.id);
							}}
						/>
					) : (
						<Icon
							as={StarOutlineIcon}
							w="16px"
							h="16px"
							onClick={() => {
								triggerAddDocumentToFavorite(document.id);
							}}
							color="blue.400"
							cursor="pointer"
							_hover={{
								color: 'blue.700',
							}}
						/>
					)}
					<Box
						bg={documentTypes[Object.keys(documentTypes).filter((key) => key === document.documentType)[0]]}
						h="42px"
						w="4px"
						borderRadius="4px"
					/>
					<VStack w="100%" alignItems="start" spacing="0">
						<Text size="boldLg">{document.name}</Text>
						<Text size="sm">
							Ajouté {/* le {new Date(document.createdDate).toLocaleDateString('fr-FR')} */} par Vous
							{/* {document.ownerId} */}
						</Text>
					</VStack>
				</HStack>
				{isMobile ? (
					<VStack w="100%" spacing="4px">
						<Button
							size="customSm"
							variant="primary"
							w="100%"
							onClick={() => window.open(document.url, '_blank')}
						>
							Télécharger
						</Button>
						<Button size="customSm" variant="secondary" w="100%" onClick={onOpenUpdateModal}>
							Modifier
						</Button>
						<Button size="customSm" variant="delete" w="100%" onClick={onOpenDeleteModal}>
							Supprimer
						</Button>
					</VStack>
				) : (
					<HStack>
						<Button
							size="customSm"
							variant="delete"
							w={{ base: '100%', md: 'auto' }}
							onClick={onOpenDeleteModal}
						>
							Supprimer
						</Button>
						<Button
							size="customSm"
							variant="secondary"
							w={{ base: '100%', md: 'auto' }}
							onClick={onOpenUpdateModal}
						>
							Modifier
						</Button>
						<Button
							size="customSm"
							variant="primary"
							w={{ base: '100%', md: 'auto' }}
							onClick={() => window.open(document.url, '_blank')}
						>
							Télécharger
						</Button>
					</HStack>
				)}
			</Stack>
			<UpdateDocumentHandler isOpen={isOpenUpdateModal} onClose={onCloseUpdateModal} documentId={document.id} />
			<DeleteDocumentHandler isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal} documentId={document.id} />
		</>
	);
};

export default DocumentCard;
