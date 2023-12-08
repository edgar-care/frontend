import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalFooter,
	Button,
	Text,
	Icon,
	HStack,
	VStack,
} from '@chakra-ui/react';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

import { useDeleteDocumentMutation } from 'services/request/documents';

const DeleteDocumentModal = ({
	isOpen,
	onClose,
	documentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	documentId: string;
}) => {
	const [triggerDeleteDocument] = useDeleteDocumentMutation();

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent borderRadius="12px">
				<ModalBody p="24px 24px 16px 24px">
					<VStack>
						<Icon as={DeleteCrossIllustration} w="48px" h="48px" />
						<VStack>
							<Text size="xl">Êtes-vous sûr ?</Text>
							<Text textAlign="center" maxW="350px" color="grey.500">
								Si vous supprimez ce document, ni vous ni votre médecin ne pourrez le consulter.
							</Text>
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="16px 24px 24px 24px">
					<HStack w="100%">
						<Button size="customSm" variant="secondary" w="100%" onClick={onClose}>
							Non, je veux revenir en arrière
						</Button>
						<Button
							size="customSm"
							variant="delete"
							w="100%"
							onClick={() => triggerDeleteDocument({ _id: documentId })}
						>
							Oui, je suis sûr
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default DeleteDocumentModal;
