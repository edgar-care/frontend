import { useState } from 'react';

import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	HStack,
	Icon,
	Text,
	VStack,
} from '@chakra-ui/react';

import AddPatientIllustration from 'assets/illustrations/AddPatientIllustration';
import Stepper from 'components/stepper/Stepper';

const AddPatientDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [step, setStep] = useState(0);

	return (
		<Drawer
			isOpen={isOpen}
			onClose={() => {
				setStep(0);
				onClose();
			}}
			size="sm"
			placement="bottom"
		>
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px" maxH="700px">
				<DrawerBody p="24px 24px 16px 24px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={AddPatientIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl" textAlign="center">
									Ajoutez un patient
								</Text>
								<Box as="span" w="200px">
									<Stepper nbrSteps={2} activeStep={step} />
								</Box>
							</VStack>
						</VStack>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px 24px 24px 24px">
					<HStack w="100%">
						<Button
							variant="secondary"
							w="100%"
							onClick={() => {
								if (step === 0) onClose();
								else setStep(0);
							}}
						>
							{step === 0 ? 'Annuler' : 'Précédent'}
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
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default AddPatientDrawer;
