import { useState } from 'react';

import { Modal, ModalBody, ModalContent, ModalOverlay, HStack, ModalFooter, Button } from '@chakra-ui/react';

import UpdateAppointmentContent from 'components/app/dashboardPages/appointments/modals/UpdateAppointmentContent';
import UpdateAppointmentSubmitButton from 'components/app/dashboardPages/appointments/modals/UpdateAppointmentSubmitButton';

const UpdateAppointmentModal = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const [selectedAppointment, setSelectedAppointment] = useState('');

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={{ base: '2xl', lg: '4xl' }}>
			<ModalOverlay />
			<ModalContent p="24px" borderRadius="12px">
				<ModalBody>
					<UpdateAppointmentContent
						selectedAppointment={selectedAppointment}
						setSelectedAppointment={setSelectedAppointment}
					/>
				</ModalBody>
				<ModalFooter>
					<HStack w="100%">
						<Button variant="secondary" w="100%" onClick={onClose}>
							Revenir en arrière
						</Button>
						<UpdateAppointmentSubmitButton
							selectedAppointmentId={appointmentId}
							newAppointmentId={selectedAppointment}
							onClose={onClose}
						/>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default UpdateAppointmentModal;
