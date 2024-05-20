import {
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	ModalCloseButton,
	ModalFooter,
	Box,
	ModalHeader,
} from '@chakra-ui/react';

import DiagnosticModalContent from 'components/app/dashboardPages/diagnostics/modals/DiagnosticModalContent';
import DiagnosticModalFooter from 'components/app/dashboardPages/diagnostics/modals/DiagnosticModalFooter';
import DiagnosticModalHeader from 'components/app/dashboardPages/diagnostics/modals/DiagnosticModalHeader';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const UpdateAppointmentModal = ({
	isOpen,
	onClose,
	diagnostic,
	isFooterDisplayed,
}: {
	isOpen: boolean;
	onClose: () => void;
	diagnostic: AppointmentType;
	isFooterDisplayed?: boolean;
}): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', '2xl': '7xl' }} isCentered>
		<ModalOverlay />
		<ModalContent p="24px" h={{ base: '100%', '2xl': 'auto' }}>
			<ModalHeader p="0px 0px 16px 0px">
				<ModalCloseButton />
				<DiagnosticModalHeader diagnostic={diagnostic} />
			</ModalHeader>
			<Box as="span" w="100%" h="1px" bg="blue.200" />
			<ModalBody p="16px 0px 16px 0px" h="100%" overflowY="auto">
				<DiagnosticModalContent diagnostic={diagnostic} />
			</ModalBody>
			<Box as="span" w="100%" h="1px" bg="blue.200" />
			{isFooterDisplayed && (
				<ModalFooter p="16px 0px 0px 0px">
					<DiagnosticModalFooter diagnostic={diagnostic} />
				</ModalFooter>
			)}
		</ModalContent>
	</Modal>
);

export default UpdateAppointmentModal;
