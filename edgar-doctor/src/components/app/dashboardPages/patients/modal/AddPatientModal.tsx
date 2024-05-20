import { useState } from 'react';

import {
	Box,
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

import AddPatientIllustration from 'assets/illustrations/AddPatientIllustration';
import Stepper from 'components/stepper/Stepper';

const AddPatientModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [step, setStep] = useState(0);
	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				setStep(0);
				onClose();
			}}
			size="2xl"
		>
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="24px 24px 16px 24px">
					<VStack w="100%">
						<Icon as={AddPatientIllustration} w="48px" h="48px" />
						<VStack spacing="16px" w="100%">
							<Text size="xl">Ajoutez un patient</Text>
							<Box as="span" w="300px">
								<Stepper nbrSteps={2} activeStep={step} />
							</Box>
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="16px 24px 24px 24px">
					<HStack w="100%">
						<Button
							variant="secondary"
							w="100%"
							onClick={() => {
								if (step === 0) onClose();
								else setStep(0);
							}}
						>
							{step === 0 ? 'Annuler' : 'Revenir en arrière'}
						</Button>
						<Button
							w="100%"
							variant={step === 0 ? 'primary' : 'validate'}
							onClick={() => {
								if (step === 0) setStep(1);
							}}
							type={step === 0 ? 'button' : 'submit'}
						>
							{step === 0 ? 'Continuer' : 'Confirmer'}
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddPatientModal;
