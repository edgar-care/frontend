import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalFooter,
	Button,
	Text,
	VStack,
	Icon,
	HStack,
	useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import AddDocumentModalContent from 'components/dashboardPages/documents/modal/AddDocumentModalContent';

import { useAddDocumentMutation } from 'services/request/documents';

import { AddDocumentType } from 'types/dashboard/documents/AddDocumentType';

import AddDocumentIllustration from 'assets/illustrations/AddDocumentIllustration';

const AddDocumentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	const [triggerAddDocument] = useAddDocumentMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<AddDocumentType>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		triggerAddDocument(data)
			.unwrap()
			.then(() => {
				toast({ title: 'Votre document a été ajouté', status: 'success' });
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xl', lg: '2xl' }}>
			<ModalOverlay />
			<ModalContent borderRadius="12px">
				<ModalBody p="24px 24px 16px 24px">
					<VStack w="100%" spacing="32px">
						<VStack w="100%">
							<Icon as={AddDocumentIllustration} w="48px" h="48px" />
							<Text size="xl">Ajoutez un document à votre espace santé</Text>
						</VStack>
						<AddDocumentModalContent register={register} errors={errors} />
					</VStack>
				</ModalBody>
				<ModalFooter p="16px 24px 24px 24px">
					<HStack w="100%" spacing="12px">
						<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
						<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
							Ajouter votre document
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddDocumentModal;
