import {
	Button,
	HStack,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	VStack,
} from '@chakra-ui/react';

import AddTreatmentIllustration from 'assets/illustrations/AddTreatmentIllustration';

const AddTreatmentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
	// <Modal isOpen={isOpen} onClose={() => { reset({}); onClose();}} size={{ base: 'xl', lg: '2xl'}}>
	<Modal isOpen={isOpen} onClose={() => onClose()} size={{ base: 'xl', lg: '2xl' }}>
		<ModalOverlay />
		<ModalContent borderRadius="12px">
			<ModalBody p="24px 24px 16px 24px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={AddTreatmentIllustration} w="48px" h="48px" />
						<Text size="xl">Ajoutez un traitement</Text>
					</VStack>
				</VStack>
			</ModalBody>
			<ModalFooter p="16px 24px 24px 24px">
				<HStack w="100%" spacing="12px">
					<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
						Annuler
					</Button>
					<Button size="customMd" variant="validate" w="100%" onClick={() => {}}>
						Ajouter
					</Button>
				</HStack>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default AddTreatmentModal;
