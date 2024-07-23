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

import AddTreatmentIllustration from 'assets/illustrations/AddTreatmentIllustration';
import AddTreatmentContent from 'components/dashboardPages/treatments/modal/AddTreatmentContent';

import { type TreatmentType } from 'types/dashboard/treatments/TreatmentType';

const AddTreatmentModal = ({
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
	register: UseFormRegister<TreatmentType>;
	control: Control<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
	watch: UseFormWatch<TreatmentType>;
}) => (
	<Modal isOpen={isOpen} onClose={() => onClose()} size={{ base: 'xl', lg: '2xl' }}>
		<ModalOverlay />
		<ModalContent borderRadius="12px">
			<ModalBody p="24px 24px 16px 24px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={AddTreatmentIllustration} w="48px" h="48px" />
						<Text size="xl">Ajoutez un traitement</Text>
					</VStack>
					<AddTreatmentContent
						onSubmit={onSubmit}
						register={register}
						control={control}
						errors={errors}
						watch={watch}
					/>
				</VStack>
			</ModalBody>
			<ModalFooter p="16px 24px 24px 24px">
				<HStack w="100%" spacing="12px">
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

export default AddTreatmentModal;
