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

import UpdateTreatmentIllustration from 'assets/illustrations/UpdateTreatmentIllustration';
import UpdateTreatmentContent from 'components/dashboardPages/treatments/modal/UpdateTreatmentContent';

import { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import { Control } from 'react-hook-form';

const UpdateTreatmentModal = ({
	isOpen,
	onClose,
	antecedent,
	onSubmit,
	control,
}: {
	isOpen: boolean;
	onClose: () => void;
	antecedent: PatientMedicalAntecedentType | undefined;
	onSubmit: () => void;
	control: Control<PatientMedicalAntecedentType>;
}) => (
	<Modal isOpen={isOpen} onClose={() => onClose()} size={{ base: 'xl', lg: '2xl' }}>
		<ModalOverlay />
		<ModalContent borderRadius="12px">
			<ModalBody p="24px 24px 16px 24px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={UpdateTreatmentIllustration} w="48px" h="48px" />
						<Text size="xl">Modifiez un traitement</Text>
					</VStack>
					<UpdateTreatmentContent antecedent={antecedent} onSubmit={onSubmit} control={control} />
				</VStack>
			</ModalBody>
			<ModalFooter p="16px 24px 24px 24px">
				<HStack w="100%" spacing="12px">
					<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
						Annuler
					</Button>
					<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
						Modifier
					</Button>
				</HStack>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default UpdateTreatmentModal;
