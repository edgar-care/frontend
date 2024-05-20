import { Modal, ModalBody, ModalContent, ModalOverlay, ModalCloseButton, ModalFooter } from '@chakra-ui/react';

import DiagnosticValidateModalContent from 'components/app/dashboardPages/diagnostics/modals/validateModal/DiagnosticValidateModalContent';
import DiagnosticValidateModalFooter from 'components/app/dashboardPages/diagnostics/modals/validateModal/DiagnosticValidateModalFooter';

const UpdateAppointmentModal = ({
	isOpen,
	onClose,
	onSubmit,
}: {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
}): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size="2xl">
		<ModalOverlay />
		<ModalContent p="24px">
			<ModalCloseButton />
			<ModalBody p="0px 0px 16px 0px">
				<DiagnosticValidateModalContent />
			</ModalBody>
			<ModalFooter p="16px 0px 0px 0px">
				<DiagnosticValidateModalFooter onClose={onClose} onSubmit={onSubmit} />
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default UpdateAppointmentModal;
