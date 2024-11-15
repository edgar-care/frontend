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
import { Control, FieldErrors } from 'react-hook-form';

import UpdateTreatmentContent from 'components/dashboardPages/treatments/modal/UpdateTreatmentContent';

import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

import UpdateTreatmentIllustration from 'assets/illustrations/UpdateTreatmentIllustration';

const UpdateTreatmentModal = ({
	addedMedicines,
	isOpen,
	onClose,
	onSubmit,
	control,
	errors,
}: {
	addedMedicines: PatientMedicineType[];
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
	control: Control<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
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
					<UpdateTreatmentContent
						addedMedicines={addedMedicines}
						onSubmit={onSubmit}
						control={control}
						errors={errors}
					/>
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
