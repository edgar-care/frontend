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

import SelectHealthIssueContent from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueContent';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const SelectHealthIssueModal = ({
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
	register: UseFormRegister<HealthIssuesType>;
	control: Control<HealthIssuesType>;
	errors: FieldErrors<HealthIssuesType>;
	watch: UseFormWatch<HealthIssuesType>;
}): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size={{ base: '3xl', lg: '4xl' }}>
		<ModalOverlay />
		<ModalContent>
			<ModalBody p="32px 32px 24px 32px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={AddHealthIssueIllustration} w="48px" h="48px" />
						<VStack w="100%">
							<Text size="xl">Ajoutez un sujet de santé</Text>
						</VStack>
					</VStack>
					<SelectHealthIssueContent
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
					<Button
						size="customMd"
						variant="secondary"
						w="100%"
						onClick={onClose}
						id="edgar-onboardingMedicalPage-addHealthIssue-cancel-button"
					>
						Annuler
					</Button>
					<Button
						size="customMd"
						variant="validate"
						w="100%"
						onClick={onSubmit}
						id="edgar-onboardingMedicalPage-addHealthIssue-validate-button"
					>
						Ajouter
					</Button>
				</HStack>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default SelectHealthIssueModal;
