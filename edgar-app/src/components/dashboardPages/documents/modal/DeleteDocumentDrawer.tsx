import {
	Button,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerBody,
	DrawerFooter,
	HStack,
	Icon,
	Text,
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

import { useDeleteDocumentMutation } from 'services/request/documents';

const DeleteDocumentDrawer = ({
	isOpen,
	onClose,
	documentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	documentId: string;
}) => {
	const [triggerDeleteDocument] = useDeleteDocumentMutation();

	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent borderRadius="12px">
				<DrawerBody p="24px 24px 16px 24px">
					<VStack>
						<Icon as={DeleteCrossIllustration} w="48px" h="48px" />
						<VStack>
							<Text size="xl">Êtes-vous sûr ?</Text>
							<Text textAlign="center" maxW="350px" color="grey.500">
								Si vous supprimez ce document, ni vous ni votre médecin ne pourrez le consulter.
							</Text>
						</VStack>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px 24px 24px 24px">
					{isMobile ? (
						<VStack w="100%">
							<Button
								size="customSm"
								variant="delete"
								w="100%"
								onClick={() => triggerDeleteDocument({ id: documentId })}
							>
								Oui, je suis sûr
							</Button>
							<Button size="customSm" variant="secondary" w="100%" onClick={onClose}>
								Non, je veux revenir en arrière
							</Button>
						</VStack>
					) : (
						<HStack w="100%">
							<Button size="customSm" variant="secondary" w="100%" onClick={onClose}>
								Non, je veux revenir en arrière
							</Button>
							<Button
								size="customSm"
								variant="delete"
								w="100%"
								onClick={() => triggerDeleteDocument({ id: documentId })}
							>
								Oui, je suis sûr
							</Button>
						</HStack>
					)}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default DeleteDocumentDrawer;
