import { type Dispatch, type SetStateAction } from 'react';
import {
	Button,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	VStack,
} from '@chakra-ui/react';

import SelectPrimaryDoctorContent from 'components/onboardingPages/personal/primaryDoctor/SelectPrimaryDoctorContent';

import PeopleIllustration from 'assets/illustrations/PeopleIllustration';

const SelectPrimaryDoctorModal = ({
	isOpen,
	onClose,
	onChange,
	setPrimaryDoctorName,
}: {
	isOpen: boolean;
	onClose: () => void;
	onChange: (event: unknown) => void;
	setPrimaryDoctorName: Dispatch<SetStateAction<string>>;
}): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size="2xl">
		<ModalOverlay />
		<ModalContent>
			<ModalBody p="32px 32px 24px 32px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={PeopleIllustration} w="48px" h="48px" />
						<VStack w="100%">
							<Text size="xl">Sélectionnez votre médecin traitant</Text>
						</VStack>
					</VStack>
					<SelectPrimaryDoctorContent
						onChange={onChange}
						onClose={onClose}
						setPrimaryDoctorName={setPrimaryDoctorName}
					/>
				</VStack>
			</ModalBody>
			<ModalFooter p="24px 32px 32px 32px">
				<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
					Annuler
				</Button>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default SelectPrimaryDoctorModal;
