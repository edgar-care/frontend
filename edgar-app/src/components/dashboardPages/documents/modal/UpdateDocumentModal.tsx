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
	HStack,
	useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { useUpdateDocumentMutation } from 'services/request/documents';

import { UpdateDocumentType } from 'types/dashboard/documents/UpdateDocumentType';

import UpdateDocumentIllustration from 'assets/illustrations/UpdateDocumentIllustration';

const UpdateDocumentModal = ({
	isOpen,
	onClose,
	documentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	documentId: string;
}) => {
	const [triggerUpdateDocument] = useUpdateDocumentMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<UpdateDocumentType>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		triggerUpdateDocument({ id: documentId, ...data })
			.unwrap()
			.then(() => {
				toast({ title: 'Votre document a été mis à jour', status: 'success' });
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent borderRadius="12px">
				<ModalBody p="24px 24px 16px 24px">
					<VStack w="100%" spacing="32px">
						<VStack w="100%">
							<Icon as={UpdateDocumentIllustration} w="48px" h="48px" />
							<Text size="xl">Modifiez votre document</Text>
						</VStack>
						<VStack w="100%" px="32px" align="start">
							<FormLabel htmlFor="documentInput" fontWeight="bold" fontSize="md">
								Le nouveau nom de votre document
							</FormLabel>
							<Input
								placeholder="Mon document de santé"
								{...register('documentName', { required: true })}
							/>
							{errors.documentName?.type === 'required' && (
								<ErrorMessage>Ce champ est nécessaire</ErrorMessage>
							)}
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="16px 24px 24px 24px">
					<HStack w="100%" spacing="12px">
						<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
						<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
							Valider
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default UpdateDocumentModal;
