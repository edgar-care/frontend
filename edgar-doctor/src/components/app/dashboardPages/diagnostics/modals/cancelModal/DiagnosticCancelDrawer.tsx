import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay } from '@chakra-ui/react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import DiagnosticCancelModalContent from 'components/app/dashboardPages/diagnostics/modals/cancelModal/DiagnosticCancelModalContent';
import DiagnosticCancelModalFooter from 'components/app/dashboardPages/diagnostics/modals/cancelModal/DiagnosticCancelModalFooter';

import { type AddDiagnosticDTO } from 'store/types/diagnostics.type';

const UpdateAppointmentDrawer = ({
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
	<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
		<DrawerOverlay />
		<DrawerContent borderRadius="16px 16px 0px 0px">
			<DrawerBody p="16px">
				<DiagnosticCancelModalContent errors={errors} register={register} />
			</DrawerBody>
			<DrawerFooter p="16px">
				<DiagnosticCancelModalFooter onClose={onClose} onSubmit={onSubmit} />
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
);

export default UpdateAppointmentDrawer;
