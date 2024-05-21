import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay } from '@chakra-ui/react';

import DiagnosticValidateModalFooter from 'components/app/dashboardPages/diagnostics/modals/validateModal/DiagnosticValidateModalFooter';
import DiagnosticValidateModalContent from 'components/app/dashboardPages/diagnostics/modals/validateModal/DiagnosticValidateModalContent';

const UpdateAppointmentDrawer = ({
	isOpen,
	onClose,
	onSubmit,
}: {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
}): JSX.Element => (
	<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
		<DrawerOverlay />
		<DrawerContent borderRadius="16px 16px 0px 0px">
			<DrawerBody p="16px">
				<DiagnosticValidateModalContent />
			</DrawerBody>
			<DrawerFooter>
				<DiagnosticValidateModalFooter onClose={onClose} onSubmit={onSubmit} />
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
);

export default UpdateAppointmentDrawer;
