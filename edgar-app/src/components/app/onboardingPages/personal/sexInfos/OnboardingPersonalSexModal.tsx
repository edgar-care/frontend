import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack } from '@chakra-ui/react';

import HighlightText from 'components/HighlightText';

const OnboardingPersonalSexModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xl', lg: '3xl' }} isCentered>
		<ModalOverlay />
		<ModalContent p="32px 16px" borderRadius="16px">
			<ModalCloseButton />
			<ModalBody>
				<VStack spacing="24px" w="100%" align="start">
					<VStack spacing="0px" align="start">
						<Text size="boldLg">
							Cette information est <HighlightText>importante</HighlightText> pour le médecin.
						</Text>
						<Text size="boldLg">
							J’en ai besoin afin de vous poser les <HighlightText>bonnes questions.</HighlightText>
						</Text>
					</VStack>
					<VStack spacing="16px" w="100%" align="start">
						<Text size="xl">Comment choisir ?</Text>
						<VStack align="start">
							<Text size="lg">
								<HighlightText fontWeight="700">Masculin:</HighlightText> Vous êtes né·e avec un sexe
								masculin et n’avez pas fait de changement
							</Text>
							<Text size="lg">
								<HighlightText fontWeight="700">Féminin:</HighlightText> Vous êtes né·e avec un sexe
								féminin et n’avez pas fait de changement
							</Text>
							<Text size="lg">
								<HighlightText fontWeight="700">Autre:</HighlightText> Vous avez eu recours à un
								changement de sexe ou n’êtes pas exclusivement concerné·e par les deux sexes précédents
							</Text>
						</VStack>
					</VStack>
				</VStack>
			</ModalBody>
		</ModalContent>
	</Modal>
);

export default OnboardingPersonalSexModal;
