import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import DiagnosticCancelDrawer from 'components/app/dashboardPages/diagnostics/modals/cancelModal/DiagnosticCancelDrawer';
import DiagnosticCancelModal from 'components/app/dashboardPages/diagnostics/modals/cancelModal/DiagnosticCancelModal';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

import { type AddDiagnosticDTO } from 'store/types/diagnostics.type';

import { useAddDiagnosticMutation } from 'services/request/diagnostics';

const DiagnosticCancelHandler = ({
	isOpen,
	onClose,
	diagnostic,
}: {
	isOpen: boolean;
	onClose: () => void;
	diagnostic: AppointmentType;
}): JSX.Element => {
	const [triggerAddDiagnostic] = useAddDiagnosticMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<AddDiagnosticDTO>({
		mode: 'onChange',
	});

	const isMobile = useBreakpointValue({ base: true, smd: false });
	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		triggerAddDiagnostic({
			diagnosticId: diagnostic.id,
			validation: false,
			reason: `Votre rendez-vous a été annulé pour la raison suivante: ${data.reason}`,
			healMethod: `Pour vous permettre de vous soigner votre médecin vous conseille: ${data.healMethod}`,
		})
			.unwrap()
			.then(() => {
				toast({ title: 'Rendez-vous annulé', status: 'success' });
				onClose();
			})
			.catch(() => {
				toast({ title: "Erreur lors de l'annulation", status: 'error' });
			});
	});

	return (
		<>
			{isMobile ? (
				<DiagnosticCancelDrawer
					isOpen={isOpen}
					onClose={onClose}
					register={register}
					errors={errors}
					onSubmit={onSubmit}
				/>
			) : (
				<DiagnosticCancelModal
					isOpen={isOpen}
					onClose={onClose}
					register={register}
					errors={errors}
					onSubmit={onSubmit}
				/>
			)}
		</>
	);
};
export default DiagnosticCancelHandler;
