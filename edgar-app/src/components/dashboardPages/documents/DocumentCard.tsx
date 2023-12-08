import { Box, Button, HStack, Icon, Text, VStack, useDisclosure } from '@chakra-ui/react';

import { DocumentType } from 'types/dashboard/documents/DocumentType';

// TODO: keep only two icon
import StarHoverIcon from 'assets/icons/Stars/StarHoverIcon';
import StarOutlineIcon from 'assets/icons/Stars/StarOutlineIcon';
import DeleteDocumentModal from './modal/DeleteDocumentModal';
import UpdateDocumentModal from './modal/UpdateDocumentModal';

const DocumentCard = ({ document }: { document: DocumentType }) => {
	const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();
	const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();

	const documentTypes: { [key: string]: string } = {
		PRESCRIPTION: 'green.500',
		CERTIFICAT: 'blue.700',
		XRAY: 'green.200',
		OTHER: 'blue.200',
	};

	return (
		<>
			<HStack
				bg="white"
				border="2px solid"
				borderColor="blue.200"
				borderRadius="8px"
				p="12px"
				w="100%"
				justify="space-between"
			>
				<HStack w="100%" spacing="8px">
					{document.isFavorite ? (
						<Icon as={StarHoverIcon} w="16px" h="16px" onClick={() => {}} />
					) : (
						<Icon
							as={StarOutlineIcon}
							w="16px"
							h="16px"
							onClick={() => {}}
							color="blue.400"
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
							Ajouté le {new Date(document.createdDate).toLocaleDateString('fr-FR')} par{' '}
							{document._ownerId}
						</Text>
					</VStack>
				</HStack>
				<HStack>
					<Button size="customSm" variant="delete" onClick={onOpenDeleteModal}>
						Supprimer
					</Button>
					<Button size="customSm" variant="secondary" onClick={onOpenUpdateModal}>
						Modifier
					</Button>
					<Button size="customSm" variant="primary">
						Télécharger
					</Button>
				</HStack>
			</HStack>
			<DeleteDocumentModal isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal} documentId={document._id} />
			<UpdateDocumentModal isOpen={isOpenUpdateModal} onClose={onCloseUpdateModal} documentId={document._id} />
		</>
	);
};

export default DocumentCard;
