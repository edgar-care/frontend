import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, VStack } from '@chakra-ui/react';
import QuestionCard from './QuestionCard';

const ModalChangeInfos = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => (
	<Modal size={{ base: 'xl', md: '2xl' }} isOpen={isOpen} onClose={onClose}>
		<ModalOverlay />
		<ModalContent p={{ base: '16px', md: '32px' }} bg="blue.100" borderRadius="16px">
			<ModalCloseButton size={{ base: 'md', md: 'lg' }} color="black" />
			<ModalBody p="24px">
				<VStack spacing="24px">
					<QuestionCard
						para="Vous voulez ajouter une note pour votre praticien ?"
						button="Ajouter une note"
					/>
					<QuestionCard para="Vous avez besoin de modifier votre rendez-vous ?" button="Modifier l'horaire" />
					<QuestionCard
						para="Vous avez besoin d'annuler votre rendez-vous ?"
						button="Annuler mon rendez-vous"
					/>
				</VStack>
			</ModalBody>
		</ModalContent>
	</Modal>
);

export default ModalChangeInfos;
