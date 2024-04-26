import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	HStack,
	Icon,
	Text,
	useBreakpointValue,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import AddDocumentModalContent from 'components/dashboardPages/documents/modal/AddDocumentModalContent';

import { useAddDocumentMutation } from 'services/request/documents';

import { AddDocumentType } from 'types/dashboard/documents/AddDocumentType';
import { DocumentTypeType } from 'types/dashboard/documents/DocumentTypeType';
import { DocumentCategoryType } from 'types/dashboard/documents/DocumentCategoryType';

import AddDocumentIllustration from 'assets/illustrations/AddDocumentIllustration';

const AddDocumentDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	const [triggerAddDocument] = useAddDocumentMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<AddDocumentType>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const isMobile = useBreakpointValue({ base: true, sm: false });

	const onSubmit = handleSubmit((data) => {
		if (data.document[0].size > 15728640) toast({ title: 'Le fichier ne doit pas dépasser 15Mo', status: 'error' });
		else {
			const formData = new FormData();
			formData.append('document', data.document[0]);
			formData.append('documentType', data.documentType as DocumentTypeType);
			formData.append('category', data.category as DocumentCategoryType);
			formData.append('isFavorite', data.isFavorite ? 'true' : 'false');

			triggerAddDocument(formData)
				.unwrap()
				.then(() => {
					toast({ title: 'Votre document a été ajouté', status: 'success' });
					onClose();
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		}
	});

	return (
		<Drawer
			isOpen={isOpen}
			onClose={() => {
				reset({});
				onClose();
			}}
			size="sm"
			placement="bottom"
		>
			<DrawerOverlay />
			<DrawerContent borderRadius="12px">
				<DrawerBody p="24px 24px 16px 24px">
					<VStack w="100%" spacing="32px">
						<VStack w="100%">
							<Icon as={AddDocumentIllustration} w="48px" h="48px" />
							<Text size="xl" textAlign="center">
								Ajoutez un document à votre espace santé
							</Text>
						</VStack>
						<AddDocumentModalContent register={register} errors={errors} />
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px 24px 24px 24px">
					{isMobile ? (
						<VStack w="100%" spacing="12px">
							<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
								Ajouter votre document
							</Button>
							<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
								Annuler
							</Button>
						</VStack>
					) : (
						<HStack w="100%" spacing="12px">
							<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
								Annuler
							</Button>
							<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
								Ajouter votre document
							</Button>
						</HStack>
					)}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default AddDocumentDrawer;
