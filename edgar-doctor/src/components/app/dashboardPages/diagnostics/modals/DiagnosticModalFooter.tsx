import { Button, HStack, Text, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react';

import DiagnosticValidateHandler from 'components/app/dashboardPages/diagnostics/modals/validateModal/DiagnosticValidateHandler';
import DiagnosticCancelHandler from 'components/app/dashboardPages/diagnostics/modals/cancelModal/DiagnosticCancelHandler';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const DiagnosticModalFooter = ({ diagnostic }: { diagnostic: AppointmentType }): JSX.Element => {
	const { isOpen: isOpenValidate, onOpen: onOpenValidate, onClose: onCloseValidate } = useDisclosure();
	const { isOpen: isOpenCancel, onOpen: onOpenCancel, onClose: onCloseCancel } = useDisclosure();

	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<VStack w="100%" align="start">
			<Text size="boldLg">Ce rendez-vous est-il nécessaire ?</Text>
			{isMobile ? (
				<VStack w="100%">
					<Button variant="validate" w="100%" onClick={onOpenValidate}>
						Oui, garder le rendez-vous
					</Button>
					<Button variant="delete" w="100%" onClick={onOpenCancel}>
						Non, annuler le rendez-vous
					</Button>
				</VStack>
			) : (
				<HStack spacing="16px">
					<Button variant="delete" onClick={onOpenCancel}>
						Non, annuler le rendez-vous
					</Button>
					<Button variant="validate" onClick={onOpenValidate}>
						Oui, garder le rendez-vous
					</Button>
				</HStack>
			)}
			<DiagnosticValidateHandler isOpen={isOpenValidate} onClose={onCloseValidate} diagnostic={diagnostic} />
			<DiagnosticCancelHandler isOpen={isOpenCancel} onClose={onCloseCancel} diagnostic={diagnostic} />
		</VStack>
	);
};

export default DiagnosticModalFooter;
