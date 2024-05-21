import { Modal, ModalBody, ModalContent, ModalOverlay, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import DiagnosticCancelModalFooter from 'components/app/dashboardPages/diagnostics/modals/cancelModal/DiagnosticCancelModalFooter';
import DiagnosticCancelModalContent from 'components/app/dashboardPages/diagnostics/modals/cancelModal/DiagnosticCancelModalContent';

import { type AddDiagnosticDTO } from 'store/types/diagnostics.type';

const UpdateAppointmentModal = ({
	isOpen,
	onClose,
	errors,
	register,
	onSubmit,
}: {
	isOpen: boolean;
	onClose: () => void;
	errors: FieldErrors<AddDiagnosticDTO>;
	register: UseFormRegister<AddDiagnosticDTO>;
	onSubmit: () => void;
}): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size="2xl">
		<ModalOverlay />
		<ModalContent p="24px">
			<ModalCloseButton />
			<ModalBody p="0px 0px 16px 0px">
				<DiagnosticCancelModalContent errors={errors} register={register} />
			</ModalBody>
			<ModalFooter p="16px 0px 0px 0px">
				<DiagnosticCancelModalFooter onClose={onClose} onSubmit={onSubmit} />
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default UpdateAppointmentModal;
