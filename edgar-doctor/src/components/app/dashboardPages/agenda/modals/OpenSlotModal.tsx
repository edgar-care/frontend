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
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import OpenSlotModalContent from 'components/app/dashboardPages/agenda/modals/OpenSlotModalContent';

import CheckCircleIllustration from 'assets/illustrations/CheckCircleIllustration';

import { type OpenSlotType } from 'types/app/dashboard/agenda/OpenSlotType';

const OpenSlotModal = ({
	isOpen,
	onClose,
	register,
	errors,
	onSubmit,
	availableHours,
}: {
	isOpen: boolean;
	onClose: () => void;
	register: UseFormRegister<OpenSlotType>;
	errors: FieldErrors<OpenSlotType>;
	onSubmit: () => void;
	availableHours: string[];
}): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size="2xl">
		<ModalOverlay />
		<ModalContent>
			<ModalBody p="24px 24px 16px 24px">
				<VStack spacing="32px" w="100%">
					<VStack w="100%">
						<Icon as={CheckCircleIllustration} w="48px" h="48px" />
						<VStack spacing="16px" w="100%">
							<Text size="xl">Ouvrez un créneau</Text>
						</VStack>
					</VStack>
					<OpenSlotModalContent register={register} errors={errors} availableHours={availableHours} />
				</VStack>
			</ModalBody>
			<ModalFooter p="16px 24px 24px 24px">
				<HStack w="100%">
					<Button variant="secondary" w="100%" onClick={onClose}>
						Revenir en arrière
					</Button>
					<Button w="100%" variant="validate" onClick={onSubmit} type="submit">
						Ouvrir le créneau
					</Button>
				</HStack>
			</ModalFooter>
		</ModalContent>
	</Modal>
);
export default OpenSlotModal;
