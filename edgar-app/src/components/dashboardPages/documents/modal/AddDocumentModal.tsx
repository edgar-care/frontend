import React, { useEffect, useRef, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalFooter,
	FormLabel,
	Input,
	Select,
	Button,
	Text,
	VStack,
	Icon,
	HStack,
	Stack,
} from '@chakra-ui/react';

import AddDocumentIllustration from 'assets/illustrations/AddDocumentIllustration';

interface AddDocumentProps {
	isOpen: boolean;
	onClose: () => void;
	onAddDocument: (type: string, name: string, author: string, medicine: string) => void;
}

const AddDocumentModal: React.FC<AddDocumentProps> = ({ isOpen, onClose, onAddDocument }) => {
	const [newDocumentType, setNewDocumentType] = React.useState('');
	const [newDocumentMedicine, setNewDocumentMedicine] = React.useState('');
	const documentInputRef = useRef<HTMLInputElement | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (isOpen) {
			setError(null);
		}
	}, [isOpen]);

	const handleCancel = () => {
		onClose();
		setNewDocumentType('');
		setNewDocumentMedicine('');
	}

	const handleAddDocument = () => {
		if (!newDocumentType || !newDocumentMedicine || !documentInputRef.current?.files?.[0]) {
			setError("Veuillez remplir tous les champs avant d'ajouter le document.");
			return;
		}

		let documentName = '';

		switch (newDocumentType) {
			case 'PRESCRIPTION':
				documentName = 'Ordonnance';
				break;
			case 'CERTIFICAT':
				documentName = 'Certificat';
				break;
			case 'XRAY':
				documentName = 'Radio';
				break;
			case 'OTHER':
				documentName = 'Autre';
				break;
			default:
				documentName = '';
				break;
		}
		onAddDocument(newDocumentType, documentName, 'Vous', newDocumentMedicine);
		onClose();
		setNewDocumentType('');
		setNewDocumentMedicine('');
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xl', lg: '2xl' }}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="24px 24px 0px 24px">
					<VStack w="100%">
						<VStack w="100%">
							<Icon as={AddDocumentIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl">Ajoutez un document à votre espace santé</Text>
							</VStack>
						</VStack>
						<VStack spacing="24px" w="100%" p="24px 32px 0px 32px">
							<Stack w="100%">
								<FormLabel htmlFor="documentInput" fontWeight="bold" fontSize="md">
									Votre document
								</FormLabel>
								<Input id="documentInput" type="file" accept=".pdf, .doc, .docx, .png, .jpeg, .jpg, .odt, .odtx" ref={(ref) => (documentInputRef.current = ref)} />
							</Stack>
							<Stack w="100%" direction="row" justifyContent="space-between">
								<Stack w="47%">
									<FormLabel htmlFor="typeInput" fontWeight="bold" fontSize="md">
										Le type de votre document
									</FormLabel>
									<Select
										id="typeInput"
										value={newDocumentType}
										onChange={(e) => setNewDocumentType(e.target.value)}
										border="2px"
										borderColor="blue.500"
										borderRadius="12"
									>
										<option value="" disabled hidden></option>
										<option value="PRESCRIPTION">Ordonnance</option>
										<option value="CERTIFICAT">Certificat</option>
										<option value="XRAY">Radio</option>
										<option value="OTHER">Autre</option>
									</Select>
								</Stack>
								<Stack w="47%">
									<FormLabel htmlFor="medicineInput" fontWeight="bold" fontSize="md">
										Le type de médecine
									</FormLabel>
									<Select
										id="medicineInput"
										value={newDocumentMedicine}
										onChange={(e) => setNewDocumentMedicine(e.target.value)}
										border="2px"
										borderColor="blue.500"
										borderRadius="12"
									>
										<option value="" disabled hidden></option>
										<option value="MEDECINE_GENERALE">Générale</option>
									</Select>
								</Stack>
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
							<Button size="customMd" variant="validate" w="100%" onClick={handleAddDocument}>
								Ajouter votre document
							</Button>
						</HStack>
						{error && <Text color="red.500">{error}</Text>}
					</VStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddDocumentModal;
