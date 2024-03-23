import { useState } from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay, VStack } from '@chakra-ui/react';
import UpdateAppointmentSubmitButton from 'components/app/dashboardPages/appointments/modals/UpdateAppointmentSubmitButton';
import UpdateAppointmentContent from './UpdateAppointmentContent';

const UpdateAppointmentDrawer = ({
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
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px" maxH="700px">
				<DrawerBody p="16px">
					<UpdateAppointmentContent
						selectedAppointment={selectedAppointment}
						setSelectedAppointment={setSelectedAppointment}
					/>
				</DrawerBody>
				<DrawerFooter p="16px">
					<VStack w="100%">
						<UpdateAppointmentSubmitButton
							selectedAppointmentId={appointmentId}
							newAppointmentId={selectedAppointment}
							onClose={onClose}
						/>
						<Button variant="secondary" w="100%" onClick={onClose}>
							Revenir en arrière
						</Button>
					</VStack>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default UpdateAppointmentDrawer;
