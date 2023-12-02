import { useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalFooter,
	Input,
	Button,
	Text,
	FormLabel,
	VStack,
	Icon,
	Stack,
	HStack,
} from '@chakra-ui/react';

import EditDocumentIllustration from 'assets/illustrations/EditDocumentIllustration';

interface EditDocumentProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (newName: string) => void;
}

const EditDocumentModal: React.FC<EditDocumentProps> = ({ isOpen, onClose, onSave }) => {
	const [newDocumentName, setNewDocumentName] = useState('');
	const [error, setError] = useState<string | null>(null);

	const handleCancel = () => {
		setError(null);
		onClose();
		setNewDocumentName('');
	}
	const handleSave = () => {
		if (!newDocumentName) {
			setError("Veuillez entrer un nouveau nom pour le document.");
			return;
		}

		setError(null);
		onSave(newDocumentName);
		onClose();
		setNewDocumentName('');
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size='xl'>
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="24px 24px 0px 24px">
					<VStack w="100%">
						<VStack w="100%">
							<Icon as={EditDocumentIllustration} w="48px" h="48px" />
							<VStack w="100%">
								<Text size="xl">Modifiez votre document</Text>
							</VStack>
						</VStack>
						<VStack w="100%" p="24px 24px 0px 24px">
							<Stack w="100%">
								<FormLabel htmlFor="documentInput" fontWeight="bold" fontSize="md">
									Le nouveau nom de votre document
								</FormLabel>
								<Input
									placeholder="Mon document de santé"
									value={newDocumentName}
									onChange={(e) => setNewDocumentName(e.target.value)}
								/>
							</Stack>
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="32px 24px 24px 24px">
					<VStack w="100%">
						<HStack w="100%">
							<Button size="customMd" variant="secondary" w="100%" onClick={handleCancel}>
								Annuler
							</Button>
							<Button size="customMd" variant="validate" w="100%" onClick={handleSave}>
								Valider
							</Button>
						</HStack>
						{error && <Text color="red.500">{error}</Text>}
					</VStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EditDocumentModal;
