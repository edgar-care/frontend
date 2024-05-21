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
import type { Control, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import SelectMedicalAntecedentsContent from 'components/app/dashboard/patients/modal/SelectMedicalAntecedentsContent';

import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

import AddMedicalAntecedentsIllustration from 'assets/illustrations/AddMedicalAntecedentsIllustration';

const SelectMedicalAntecedentsModal = ({
	isOpen,
	onClose,
	onSubmit,
	register,
	control,
	errors,
	watch,
}: {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
	register: UseFormRegister<PatientMedicalAntecedentType>;
	control: Control<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
	watch: UseFormWatch<PatientMedicalAntecedentType>;
}): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size={{ base: '3xl', lg: '4xl' }}>
		<ModalOverlay />
		<ModalContent>
			<ModalBody p="32px 32px 24px 32px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={AddMedicalAntecedentsIllustration} w="48px" h="48px" />
						<VStack w="100%">
							<Text size="xl">Ajouter un sujet de santé</Text>
						</VStack>
					</VStack>
					<SelectMedicalAntecedentsContent
						onSubmit={onSubmit}
						register={register}
						control={control}
						errors={errors}
						watch={watch}
					/>
				</VStack>
			</ModalBody>
			<ModalFooter p="24px 32px 32px 32px">
				<HStack w="100%">
					<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
						Annuler
					</Button>
					<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
						Ajouter
					</Button>
				</HStack>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default SelectMedicalAntecedentsModal;
