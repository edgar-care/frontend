import {
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';

const OnboardingMedicalModal = ({
	body,
	isOpen,
	onClose,
	onClick,
}: {
	body: JSX.Element;
	isOpen: boolean;
	onClose: () => void;
	onClick: () => void;
}): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
		<ModalOverlay />
		<ModalContent borderRadius="16px" gap="16px">
			<ModalHeader>Vous êtes sûr ?</ModalHeader>
			<ModalCloseButton />
			<ModalBody>{body}</ModalBody>
			<ModalFooter>
				<HStack>
					<Button variant="secondary" size="sm" onClick={onClose}>
						J'ai oublié des informations
					</Button>
					<Button size="sm" onClick={onClick}>
						Tout est bon !
					</Button>
				</HStack>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default OnboardingMedicalModal;
