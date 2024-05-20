import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react';

import DiagnosticModalContent from 'components/app/dashboardPages/diagnostics/modals/DiagnosticModalContent';
import DiagnosticModalFooter from 'components/app/dashboardPages/diagnostics/modals/DiagnosticModalFooter';
import DiagnosticModalHeader from 'components/app/dashboardPages/diagnostics/modals/DiagnosticModalHeader';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const UpdateAppointmentDrawer = ({
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
	<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
		<DrawerOverlay />
		<DrawerContent borderRadius="16px 16px 0px 0px" p="24px">
			<DrawerHeader p="0px 0px 16px 0px">
				<DrawerCloseButton />
				<DiagnosticModalHeader diagnostic={diagnostic} />
			</DrawerHeader>
			<Box as="span" w="100%" h="1px" bg="blue.200" />
			<DrawerBody p="16px 0px 16px 0px">
				<DiagnosticModalContent diagnostic={diagnostic} />
			</DrawerBody>
			<Box as="span" w="100%" h="1px" bg="blue.200" />
			{isFooterDisplayed && (
				<DrawerFooter p="16px 0px 0px 0px">
					<DiagnosticModalFooter diagnostic={diagnostic} />
				</DrawerFooter>
			)}
		</DrawerContent>
	</Drawer>
);

export default UpdateAppointmentDrawer;
